"use client";

import React from "react";
import Form from "@/components/Form";

const ContactPage = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="container mx-auto space-y-4 md:space-y-8 ">
        {/* Section title */}
        <h2 className="section-title">Delete Account</h2>
        {/* Section Content*/}
        <div className="flex flex-col gap-4 items-center w-[90%] md:w-1/2 mx-auto text-center text-gray-700 space-y-4">
          <h3 className="text-lg md:text-xl tracking-wider font-semibold ">
            Do you want to delete your account?
          </h3>
          <p className="text-base md:text-lg px-8">
            If you want to delete your account, please fill out the form below; We will delete the account after verifying that it belongs to you within 24 hours of receiving the request.
          </p>

          {/*Mail Form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
