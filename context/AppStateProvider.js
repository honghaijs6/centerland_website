import { doLoad } from "../hook/ultil";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const initData = [
    {
        id: 6,
        parent_id: 0,
        company_id: 1,
        creator_id: 2,
        route: "gioi-thieu",
        sort: 1,
        title: "Giới Thiệu",
        meta_title: null,
        images: null,
        slug: "gioi-thieu",
        content: null,
        date_created: "2021-01-28T07:48:49.000Z",
        date_modified: "2021-02-17T08:32:28.000Z",
        json: '{"title":"gioi thieu "}',
        creator: "bdskimcuong"
    },
    {
        id: 14,
        parent_id: 6,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 1,
        title: "Tầm nhìn và sứ mệnh",
        meta_title: null,
        images: '[{"id":"b11aee8c-cf16-4469-b79d-f7699a5a0399","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Ftam-nhin-2.png?alt=media","name":"tam-nhin-2.png"}]',
        slug: "tam-nhin-va-su-menh",
        content: null,
        date_created: "2021-01-28T08:01:05.000Z",
        date_modified: "2021-03-04T15:42:49.000Z",
        json: '{"title":"tam nhin va su menh "}',
        creator: "bdskimcuong"
    },
    {
        id: 17,
        parent_id: 7,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 1,
        title: "Becamex Bình Phước",
        meta_title: null,
        images: '[{"id":"1d129878-29c1-4765-a5a8-71578aa04f66","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fbecamex.jpg?alt=media","name":"becamex.jpg"}]',
        slug: "becamex-binh-phuoc",
        content: null,
        date_created: "2021-01-28T08:02:05.000Z",
        date_modified: "2021-03-04T15:44:24.000Z",
        json: '{"title":"becamex binh phuoc "}',
        creator: "bdskimcuong"
    },
    {
        id: 19,
        parent_id: 8,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 1,
        title: "Nhà phố",
        meta_title: null,
        images: '[{"id":"3d636ae2-e8c9-4b35-ae76-23fb33029fe2","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fnhapho.jpg?alt=media","name":"nhapho.jpg"}]',
        slug: "nha-pho",
        content: null,
        date_created: "2021-01-28T08:02:34.000Z",
        date_modified: "2021-03-04T15:46:01.000Z",
        json: '{"title":"nha pho "}',
        creator: "bdskimcuong"
    },
    {
        id: 22,
        parent_id: 10,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 1,
        title: "Kiến thức cho nhà đầu tư",
        meta_title: null,
        images: '[{"id":"c520e491-0849-48f2-b965-30519c932581","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fkien-thuc.png?alt=media","name":"kien-thuc.png"}]',
        slug: "kien-thuc-cho-nha-dau-tu",
        content: null,
        date_created: "2021-01-28T08:15:16.000Z",
        date_modified: "2021-03-04T15:51:56.000Z",
        json: '{"title":"kien thuc cho nha dau tu "}',
        creator: "bdskimcuong"
    },
    {
        id: 25,
        parent_id: 11,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 1,
        title: "Tuyển dụng",
        meta_title: null,
        images: '[{"id":"752755ca-fb5e-478c-9343-09f78bf1d861","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Ftuyen-dung.jpg?alt=media","name":"tuyen-dung.jpg"}]',
        slug: "tuyen-dung",
        content: null,
        date_created: "2021-01-28T08:16:02.000Z",
        date_modified: "2021-03-04T15:47:38.000Z",
        json: '{"title":"tuyen dung "}',
        creator: "bdskimcuong"
    },
    {
        id: 7,
        parent_id: 0,
        company_id: 1,
        creator_id: 2,
        route: "du-an",
        sort: 2,
        title: "Dự Án",
        meta_title: null,
        images: null,
        slug: "du-an",
        content: null,
        date_created: "2021-01-28T07:52:23.000Z",
        date_modified: "2021-02-17T08:32:41.000Z",
        json: '{"title":"du an "}',
        creator: "bdskimcuong"
    },
    {
        id: 15,
        parent_id: 6,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 2,
        title: "Giá trị cốt lõi",
        meta_title: null,
        images: '[{"id":"ab95d052-3385-402d-afb3-cc028c372701","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fmanagers-2.png?alt=media","name":"managers-2.png"}]',
        slug: "gia-tri-cot-loi",
        content: null,
        date_created: "2021-01-28T08:01:18.000Z",
        date_modified: "2021-03-04T15:42:12.000Z",
        json: '{"title":"gia tri cot loi "}',
        creator: "bdskimcuong"
    },
    {
        id: 18,
        parent_id: 7,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 2,
        title: "VSHIP 1",
        meta_title: null,
        images: '[{"id":"e8754890-80ff-42eb-b3b6-c460f4879ff7","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fvship-1.jpg?alt=media","name":"vship-1.jpg"}]',
        slug: "vship-1",
        content: null,
        date_created: "2021-01-28T08:02:20.000Z",
        date_modified: "2021-03-04T15:43:46.000Z",
        json: '{"title":"vship 1 "}',
        creator: "bdskimcuong"
    },
    {
        id: 20,
        parent_id: 8,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 2,
        title: "Đất nền",
        meta_title: null,
        images: '[{"id":"ef35129d-ed26-49c6-9c73-f17d51e4650d","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fdatnen.jpg?alt=media","name":"datnen.jpg"}]',
        slug: "dat-nen",
        content: null,
        date_created: "2021-01-28T08:02:50.000Z",
        date_modified: "2021-03-04T15:45:34.000Z",
        json: '{"title":"dat nen "}',
        creator: "bdskimcuong"
    },
    {
        id: 23,
        parent_id: 10,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 2,
        title: "Chủ đầu tư Becamex",
        meta_title: null,
        images: '[{"id":"ae9537c4-10e1-429b-a4dc-32bb183b0445","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fchu-dau-tu-becamex.png?alt=media","name":"chu-dau-tu-becamex.png"}]',
        slug: "chu-dau-tu-becamex",
        content: null,
        date_created: "2021-01-28T08:15:35.000Z",
        date_modified: "2021-03-04T15:50:39.000Z",
        json: '{"title":"chu dau tu becamex "}',
        creator: "bdskimcuong"
    },
    {
        id: 26,
        parent_id: 11,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 2,
        title: "Giáo trình đào tạo",
        meta_title: null,
        images: '[{"id":"09d42672-425b-4a98-a714-b2c6e3c931f2","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fgiao-trinh.jpg?alt=media","name":"giao-trinh.jpg"}]',
        slug: "giao-trinh-dao-tao",
        content: null,
        date_created: "2021-01-28T08:16:18.000Z",
        date_modified: "2021-03-04T15:47:05.000Z",
        json: '{"title":"giao trinh dao tao "}',
        creator: "bdskimcuong"
    },
    {
        id: 8,
        parent_id: 0,
        company_id: 1,
        creator_id: 2,
        route: "ky-gui",
        sort: 3,
        title: "Ký Gủi",
        meta_title: null,
        images: null,
        slug: "ky-gui",
        content: null,
        date_created: "2021-01-28T07:53:59.000Z",
        date_modified: "2021-02-17T08:33:51.000Z",
        json: '{"title":"ky gui "}',
        creator: "bdskimcuong"
    },
    {
        id: 21,
        parent_id: 8,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 3,
        title: "Căn hộ",
        meta_title: null,
        images: '[{"id":"69cab390-3f0f-401a-b855-d28ae42b9f32","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fcanho.jpg?alt=media","name":"canho.jpg"}]',
        slug: "can-ho",
        content: null,
        date_created: "2021-01-28T08:02:57.000Z",
        date_modified: "2021-03-04T15:45:07.000Z",
        json: '{"title":"can ho "}',
        creator: "bdskimcuong"
    },
    {
        id: 24,
        parent_id: 10,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 3,
        title: "Tin thị trường",
        meta_title: null,
        images: '[{"id":"04612303-75c4-4a54-9b91-64a91e3deb3d","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Ftin-tuc-thi-truong.jpeg?alt=media","name":"tin-tuc-thi-truong.jpeg"}]',
        slug: "tin-thi-truong",
        content: null,
        date_created: "2021-01-28T08:15:47.000Z",
        date_modified: "2021-03-04T15:49:06.000Z",
        json: '{"title":"tin thi truong "}',
        creator: "bdskimcuong"
    },
    {
        id: 9,
        parent_id: 0,
        company_id: 1,
        creator_id: 2,
        route: "tien-do-du-an",
        sort: 4,
        title: "Tiến Độ Dự Án",
        meta_title: null,
        images: '[{"id":"13fb675a-add3-463c-8894-e73ae5fe00b6","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fheight-2.jpg?alt=media","name":"height-2.jpg"}]',
        slug: "tien-do-du-an",
        content: null,
        date_created: "2021-01-28T07:54:25.000Z",
        date_modified: "2021-03-04T15:22:48.000Z",
        json: '{"title":"tien do du an "}',
        creator: "bdskimcuong"
    },
    {
        id: 30,
        parent_id: 10,
        company_id: 1,
        creator_id: 2,
        route: null,
        sort: 4,
        title: "Danh bạ CTY KCN Becamex Bình Phước",
        meta_title: null,
        images: '[{"id":"e67659d9-20f6-48ad-ac2d-69f4b1f6265f","url":"https://firebasestorage.googleapis.com/v0/b/benjamin-region-hongkong.appspot.com/o/photos%2Fdanhba.png?alt=media","name":"danhba.png"}]',
        slug: "danh-ba-cty-kcn-becamex-binh-phuoc",
        content: null,
        date_created: "2021-03-04T11:27:22.000Z",
        date_modified: "2021-03-04T15:54:01.000Z",
        json: '{"title":"danh ba cty kcn becamex binh phuoc "}',
        creator: "bdskimcuong"
    },
    {
        id: 11,
        parent_id: 0,
        company_id: 1,
        creator_id: 2,
        route: "tuyen-dung-dao-tao",
        sort: 5,
        title: "Tuyển Dụng & Đào Tạo",
        meta_title: null,
        images: null,
        slug: "tuyen-dung---dao-tao",
        content: null,
        date_created: "2021-01-28T07:54:59.000Z",
        date_modified: "2021-02-17T10:19:55.000Z",
        json: '{"title":"tuyen dung   dao tao "}',
        creator: "bdskimcuong"
    },
    {
        id: 10,
        parent_id: 0,
        company_id: 1,
        creator_id: 2,
        route: "tin-tuc",
        sort: 6,
        title: "Tin Tức",
        meta_title: null,
        images: null,
        slug: "tin-tuc",
        content: null,
        date_created: "2021-01-28T07:54:38.000Z",
        date_modified: "2021-02-17T08:35:15.000Z",
        json: '{"title":"tin tuc "}',
        creator: "bdskimcuong"
    }
];

export const AppStateProvider = ({ children }) => {
    const [webCate, setWebcate] = useState(initData);

    useEffect(() => {
        doLoad("portalcats", {
            sort_by: "sort",
            sort_type: "asc",
            parent_id: null,
            max: "all"
        }).then((res) => {
            const data = res.rows;
            console.log(JSON.stringify(data));

            setWebcate(data);
        });

        return () => {};
    }, []);

    return (
        <AppContext.Provider
            value={{
                webCate,
                setWebcate
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
