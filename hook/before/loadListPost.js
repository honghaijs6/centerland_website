import { doLoad } from '../ultil';

function loadListPost(webcate = [], slug = '') {
    return new Promise((resolve) => {
        try {
            const info = webcate.find((item) => item.slug === slug);

            
            doLoad('posts', {
                p: 0,
                max: 10,
                parent_id: info?.id,
            }).then((res) => {
                resolve(res.name === 'success' ? res.rows : []);
            });
        } catch (err) {
            resolve(res.name === 'success' ? res.rows : []);
        }
    });
}

export default loadListPost;
