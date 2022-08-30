import fs from 'fs'
import unzipper from 'unzipper'


async function unzip_and_save(path: string, name:string) {
    const IsUnziped = await fs.createReadStream(path).pipe(unzipper.Extract({ path: path.split(name)[0] }))
    return IsUnziped
    // if(IsUnziped){
    //     fs.exists(path, function(exists) {
    //       if(exists) {
    //         await fs.unlinkSync(path)
    //       }
    //     });
    // }
}

export default unzip_and_save;