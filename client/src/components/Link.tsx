import { useParams } from "react-router-dom";

const Link = () => {
    const {link}= useParams();
    console.log(link);
    

}
export default Link;