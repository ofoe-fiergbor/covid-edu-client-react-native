import { Share } from 'react-native'

const onShare = async (title, message, url) =>{
    const messageAndUrl = message.concat('\n\n').concat(url)
    try {
        const result = await Share.share(
            {
                title,
                message: messageAndUrl
            },
            {
                subject: title
            }
        )
        // if(result.action === Share.sharedAction)
    } catch (error) {
        
    }
}

export default {onShare}