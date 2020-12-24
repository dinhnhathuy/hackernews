import axios from 'axios'

export default{
    fetch_top_stories:({commit}) => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => {
            let results = res.data.slice(0,25);
            results.map(ele => {
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json`)
                .then(res => {
                    commit('APPEND_TOP_STORY',res.data)
                })
                .catch(error => console.log(error))
            })
        }).catch(error => console.log(error))
    }
}
