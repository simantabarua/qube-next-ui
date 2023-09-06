import React from "react";
import SoftwareImg from "public/software-icon.svg";
import MonthlyStatistics_right from "public/Monthly_Statistics_1.svg";
import MonthlyStatistics_left from "public/Monthly_Statistics_2.svg";
import Image from "next/image";
const Services = () => {
  return (
    <>
      <section className="min-h-screen container mx-auto flex flex-col gap-8 ">
        <div className=" flex flex-col gap-4 px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Reconciliation
          </p>
          <h3 className="text-3xl font-semibold max-w-xl">
            Comprehensive insight with an attractive appearance.
          </h3>
          <p className="text-secondary  max-w-2xl">
            Manage reconciliation across processors smoothly with all your
            settlement data in one report. We consolidate all your
            reconciliation data so your team won’t have to.
          </p>
        </div>

        <div className="min-w-full h-96 px-10  py-5  relative flex items-center rounded-3xl overflow-hidden ">
          <Image
            width={100}
            className="absolute h-full w-full inset-0 object-cover z-[1]"
            src={SoftwareImg}
            alt="banner"
          />
          <div className="relative z-[3] flex flex-col  justify-between gap-10">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold">
                The only payment service with over 100+ integrations
              </h3>
              <p className="text-secondary">
                From Asana to Zapier, Jira, Salesforce and much more - integrate
                Servicily with tools your team already uses.
              </p>
            </div>
            <div>
              <button>See all Integrations</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="px-10  py-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
            <div className="max-w-md space-y-4">
              <h3 className="text-3xl font-semibold">
                Analyze with unified data sets and advanced filters
              </h3>
              <p className="text-secondary">
                From Asana to Zapier, Jira, Salesforce and much more - integrate
                Servicily with tools your team already uses.
              </p>
            </div>
            <Image src={MonthlyStatistics_left} alt="monthly " />
          </div>
          <div className="px-10  py-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
            <div className="max-w-md space-y-4">
              <h3 className="text-3xl font-semibold">
                Custom dashboards with their features
              </h3>
              <p className="text-secondary">
                Design a dashboard that fits your needs with a variety of
                differentfilters, including specific metadata.
              </p>
            </div>
            <Image src={MonthlyStatistics_right} alt="monthly " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
