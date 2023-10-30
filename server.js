const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

const getObject = async (key) => {
    const command = new GetObjectCommand ({
        Bucket: 'discord-clone-aws',
        Key: key
    })

    const url = await getSignedUrl (client, command, {expiresIn : 20})
    return url
}

const init = async () => {
    console.log (' Get Url for image-download.png', await getObject ('discord-image.png'))
}

init ()