import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer HRNd5k1JJJGooGfkPXl-46SFDr3DSTE4a6p1l5vISAsyvxSF-HkB1HvaIsgY8CgltK_nFRlH71Jx7sg8CwVEH7pQfyZH0GmON-B4SFKxMraBt4HhMJPEZkZn2JfYX3Yx'
    }
})