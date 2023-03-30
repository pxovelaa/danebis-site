import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">
                  გამოგვიწერე მეტი სიახლისთვის
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email adress"
                  aria-label="Your Email adress"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">ნავიგაცია</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">ჩვენს შესახებ</Link>
                <Link className="text-white py-2 mb-1">ბლოგი</Link>
                <Link className="text-white py-2 mb-1">პირობები და წესები</Link>
                <Link className="text-white py-2 mb-1">კანონმდებლობა </Link>
                <Link className="text-white py-2 mb-1">+18</Link>
              </div>{" "}
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">კატეგორიები</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">ბრენდები</Link>
                <Link className="text-white py-2 mb-1">დასაკეცი</Link>
                <Link className="text-white py-2 mb-1">ფიქსირებული</Link>
                <Link className="text-white py-2 mb-1">ხელნაკეთი</Link>
                <Link className="text-white py-2 mb-1">სანადირო</Link>
                <Link className="text-white py-2 mb-1">ზურგჩანთები</Link>
                <Link className="text-white py-2 mb-1">სამზარეულო</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">სერვისები</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">
                  Microtech-ის დანები
                </Link>
                <Link className="text-white py-2 mb-1">კარამბიტის დანები</Link>
                <Link className="text-white py-2 mb-1">ელექტრო შოკი</Link>
                <Link className="text-white py-2 mb-1">Ontario-ის დანები</Link>
                <Link className="text-white py-2 mb-1">ნაჯახი</Link>
                <Link className="text-white py-2 mb-1">Banchmade</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4"> კონტაქტი</h4>
              <div className="footer-links d-flex flex-column">
                <a
                  className="text-white py-2 mb-1"
                  href="https://www.instagram.com/armyshop.ge/"
                  target="_blank"
                >
                  {" "}
                  Instagram
                </a>
                <a
                  className="text-white py-2 mb-1"
                  href="https://www.facebook.com/profile.php?id=100041139937644"
                  target="_blank"
                >
                  Facebook
                </a>
                <a
                  className="text-white py-2 mb-1"
                  href="https://www.youtube.com/@armyshop7488"
                  target="_blank"
                >
                  Youtube
                </a>
                <a
                  className="text-white py-2 mb-1" href="mailto:Armyshop.ge@gmail.com"
                >
                  Armyshop.ge@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                საავტორო უფლებები &copy; {new Date().getFullYear()},
                armyshop.ge.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
