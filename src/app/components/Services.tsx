import React from "react";
import SoftwareImg from "public/software-icon.svg";
import MonthlyStatistics_right from "public/Monthly_Statistics_1.svg";
import MonthlyStatistics_left from "public/Monthly_Statistics_2.svg";
import recon_1 from "public/reconciliation-2.png";
import recon_2 from "public/reconciliation-3.png";

import Image from "next/image";
import FutureSectionTitle from "./Common/FutureSectionTitle";
const Services = () => {
  return (
    <>
      <section id="services" className="relative min-h-screen  ">
        <div className="container lg:pt-16 lg:px-16 mx-auto flex flex-col gap-8 py-16">
          <FutureSectionTitle
            title="OBSERVABILITY"
            subtitle="Comprehensive insight with an attractive appearance."
            description="Hundreds of the most modern payment services available, connect them according to your needs - The API and data infrastructure we provide will easily help you."
          />

          <div className=" w-full h-96 px-10  py-5  relative flex items-center rounded-3xl overflow-hidden ">
            <Image
              width={100}
              className="absolute h-full w-full inset-0 object-cover opacity-60 -z-50"
              src={SoftwareImg}
              alt="banner"
            />
            <div className="relative z-[3] flex flex-col  justify-between gap-10">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold">
                  The only payment service with over 100+ integrations
                </h3>
                <p className="text-secondary">
                  From Asana to Zapier, Jira, Salesforce and much more -
                  integrate Servicily with tools your team already uses.
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
                  From Asana to Zapier, Jira, Salesforce and much more -
                  integrate Servicily with tools your team already uses.
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

          <div className="text-left">
            <FutureSectionTitle
              title="reconciliation"
              subtitle="   Simplify reconciliation with a unified ledger"
              description="Manage reconciliation across processors smoothly with all your settlement data in one report. We consolidate all your reconciliation data so your team won’t have to."
            />

            <div className="py-16 px-4 flex flex-col gap-6 ">
              {/* reconcilation  */}

              <div className=" flex  gap-9 flex-wrap">
                <div>
                  <div className="px-8 md:px-10 mx-auto w-full md:max-w-md h-full pt-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
                    <div className="max-w-xs space-y-4">
                      <h3 className="text-3xl font-semibold max-w-xs">
                        Easily share your data, wherever
                      </h3>
                    </div>

                    <Image
                      src="https://i.ibb.co/d5FpBT0/reconciliation-1.png"
                      width={350}
                      height={270}
                      alt="monthly "
                    />
                  </div>
                </div>
                <div className=" grow pl-8 pt-8 flex flex-col justify-between  rounded-3xl bg-[#F6F8FC]">
                  <div className="max-w-lg ">
                    <h3 className="text-3xl font-semibold">
                      Detailed and well-organized reports of every payment
                      processed
                    </h3>
                    <p className="text-secondary">
                      From Asana to Zapier, Jira, Salesforce and much more -
                      integrate Servicily with tools your team already uses.
                    </p>
                  </div>

                  <div className="  flex justify-between gap-8 flex-wrap">
                    <Image
                      src={recon_1}
                      alt="monthly"
                      sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <Image
                      src={recon_2}
                      alt="monthly"
                      sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* reconcilation  */}
              <div className=" flex md:flex-row-reverse gap-9 flex-wrap px-4">
                <div className="md:px-10 mx-auto max-w-md h-full pt-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
                  <div className="max-w-xs space-y-4">
                    <h3 className="text-3xl font-semibold">
                      Sync with the tools you have
                    </h3>
                  </div>
                  <Image
                    src="https://i.ibb.co/bgzDDtH/reconciliation-5.png"
                    width={350}
                    height={270}
                    alt="monthly "
                  />
                </div>
                <div className="grow">
                  <div className="md:px-10  pt-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
                    <div className="max-w-lg space-y-4">
                      <h3 className="text-3xl font-semibold">
                        Find the data you are looking for in the data center we
                        have created
                      </h3>
                      <p className="text-secondary">
                        Detailed data reports will also be automatically
                        generated in the form of a more complete .xlsx file.
                      </p>
                    </div>
                    <Image
                      src="https://i.ibb.co/3WjgLpT/reconciliation-4.png"
                      width={700}
                      height={200}
                      alt="monthly "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
