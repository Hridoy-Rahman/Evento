import React, { useEffect } from "react";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-400 p-10 bg-base-200 text-base-content ">
      <div className="flex-row-reverse lg:flex lg:flex-row lg:gap-4 justify-between">
        <div className="mb-8 ">
          <p>
            <span className="font-bold">Evento</span>
            <br />
            Providing the best service
          </p>
          <p>
            Copyright © 2023 - All right reserved by <br /> Evento
          </p>
        </div>

        <div className="mb-8 ">
          <span className="footer-title">Contact</span>
          <p className="link link-hover flex items-center gap-2">
            <HiPhone></HiPhone> 01776711440
          </p>
          <p className="link link-hover flex items-center gap-2">
            <HiEnvelope></HiEnvelope> evento@gmail.com
          </p>
          <p className="link link-hover flex items-center gap-2">
            <HiMapPin></HiMapPin>Level-4, 34, Awal Centre, Banani, Dhaka
          </p>
        </div>
        <div className="mb-8 ">
          <span className="footer-title mb-4">Follow us on</span>
          <div className="flex gap-6">
            <a className="link link-hover">
              <FaFacebook></FaFacebook>
            </a>
            <a className="link link-hover">
              <FaTwitter></FaTwitter>
            </a>
            <a className="link link-hover">
              <FaInstagram></FaInstagram>
            </a>
            <a className="link link-hover">
              <FaLinkedinIn/>
            </a>
          </div>
        </div>
        <div className="mb-8 ">
          <span className="footer-title">Legal</span>
          <div className="flex flex-col">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </div>
      <p className="text-center font-bold">
        Developed by <a href="">Hriody Rahman</a>
      </p>
    </footer>
  );
};

export default Footer;
