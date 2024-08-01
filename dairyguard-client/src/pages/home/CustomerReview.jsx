import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  return (
    <div className="section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="flex flex-col md:flex-row py-20 items-center justify-between gap- ">
        <div className="md:w-1/2 ml-12">
          <img src="/images/banner3.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5 ">
            <p className="subtitle">Customer Review</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              “I had the pleasure of trying the dairy products at Dairy Tech and
              I'm still thrilled by the experience! The service was truly
              outstanding.”
            </blockquote>

            {/* avatar */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
                <div className="avatar ">
                  <div className="w-12">
                    <img src="/images/review/review1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/review/review2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/review/review3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2 bg-white">
                  <FaStar className="text-yellow-400" />{" "}
                  <span className="font-medium bg-white">4.9</span>{" "}
                  <span className="text-[#807E7E]">(10.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
