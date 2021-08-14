import React from "react";
import Link from "next/link";

const SectionContact = (props) => {
  return (
    <section style={{ background: "#F4F5F9" }}>
      <div className="row" style={{ display: "flex", flexDirection: "row" }}>
        <div className="container">
          <div className="p-lg-5" style={{ textAlign: "center" }}>
            <div className="row">
              <div className="col-lg-4 col-md-10 mt-2 mb-2">
                <Link href="/chuyen-vien">
                  <button className="btn-white">Gặp Chuyên Viên tư vấn</button>
                </Link>
              </div>
              <div className="col-lg-4 col-md-10 mt-2 mb-2">
                <Link href="/tuyen-dung-dao-tao/tuyen-dung">
                  <button className="btn-white">Gia nhập Center Land</button>
                </Link>
              </div>
              <div className="col-lg-4 col-md-10 mt-2 mb-2">
                <Link href="/lien-he">
                  <button className="btn-white">Liên hệ</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
