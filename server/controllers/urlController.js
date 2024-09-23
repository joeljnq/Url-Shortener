import { nanoid } from 'nanoid';
import { URL } from '../models/urlModel.js';
import { validateUrl, validateShortURLResult } from '../schemas/url.js';
export const createShortUrl  = async (req, res) =>{
    const { longURL } = req.body;
    const result = validateUrl({longURL});
    const baseURL = process.env.BASE_URL ;
    if (result.error) { 
        return res.status(400).json({
            error: result.error.message
        });
    }

  
    
    let url = await URL.findOne({longURL: longURL})
    if (url) {

        return res.send({url: url.shortURL});
        
    }
    // create short url
    
    const shortCode = nanoid(5);
    const shortURL = `${baseURL}/${shortCode}`;    
    url = new URL({
        shortURL,
        shortCode,
        longURL
        
    });
    try{
        await url.save();
         res.send ( {url: shortURL});
    }catch(err){
        res.status(500).send('Error saving the URL');
    }
}

export const reDirectURL = async (req, res ) => {
    const shortURL = req.params.shortURL;
    
    const result = validateShortURLResult(shortURL)
    if (result.error) {
        return res.status(400).json({
            error: result.error.message
        });
        
    }
    URL.findOne({shortCode: shortURL}).then((url) => {
        if (url) {
            return res.redirect(url.longURL);
        } else {
            return res.status(404).send('URL not found');
        }
    }).catch(err => {
        return res.status(500).send('Error finding the URL');
    });
    
}
