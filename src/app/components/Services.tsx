import React from "react";
import SoftwareImg from "public/software-icon.svg";
import MonthlyStatistics_right from "public/Monthly_Statistics_1.svg";
import MonthlyStatistics_left from "public/Monthly_Statistics_2.svg";
import Image from "next/image";
import FutureSectionTitle from "./Common/FutureSectionTitle";
const Services = () => {
  return (
    <>
      <section className="relative min-h-screen  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute hidden md:block h-[900px] w-[1200px] -top-36 left-36 inset-0 -z-40"
        >
          <path
            d="M793.061 0.43934C792.475 -0.146447 791.525 -0.146447 790.939 0.43934L781.393 9.98528C780.808 10.5711 780.808 11.5208 781.393 12.1066C781.979 12.6924 782.929 12.6924 783.515 12.1066L792 3.62132L800.485 12.1066C801.071 12.6924 802.021 12.6924 802.607 12.1066C803.192 11.5208 803.192 10.5711 802.607 9.98528L793.061 0.43934ZM790.939 3382.06C791.525 3382.65 792.475 3382.65 793.061 3382.06L802.607 3372.51C803.192 3371.93 803.192 3370.98 802.607 3370.39C802.021 3369.81 801.071 3369.81 800.485 3370.39L792 3378.88L783.515 3370.39C782.929 3369.81 781.979 3369.81 781.393 3370.39C780.808 3370.98 780.808 3371.93 781.393 3372.51L790.939 3382.06ZM790.5 1.5V55H793.5V1.5H790.5ZM708 137.5H114V140.5H708V137.5ZM28.5 223V3102H31.5V223H28.5ZM114 3187.5H708V3184.5H114V3187.5ZM790.5 3270V3381H793.5V3270H790.5ZM708 3187.5C753.563 3187.5 790.5 3224.44 790.5 3270H793.5C793.5 3222.78 755.22 3184.5 708 3184.5V3187.5ZM28.5 3102C28.5 3149.22 66.7797 3187.5 114 3187.5V3184.5C68.4365 3184.5 31.5 3147.56 31.5 3102H28.5ZM114 137.5C66.7797 137.5 28.5 175.78 28.5 223H31.5C31.5 177.437 68.4365 140.5 114 140.5V137.5ZM790.5 55C790.5 100.563 753.563 137.5 708 137.5V140.5C755.22 140.5 793.5 102.22 793.5 55H790.5Z"
            fill="#E6E9F1"
          />
          <circle
            cx="30"
            cy="327"
            r="28.5"
            fill="white"
            stroke="#E6E9F1"
            stroke-width="3"
          />
          <g clip-path="url(#clip0_1037_3188)">
            <path
              d="M25.1599 319.149C24.4614 319.547 23.8161 320.04 23.2418 320.614C19.7207 324.135 19.7207 329.865 23.2418 333.386C26.7628 336.907 32.492 336.907 36.0131 333.386C39.5342 329.865 39.5342 324.135 36.0131 320.614C35.4388 320.04 34.7934 319.547 34.0949 319.149C33.6151 318.876 33.4477 318.265 33.7211 317.785C33.9943 317.306 34.6051 317.138 35.085 317.411C35.9421 317.9 36.7299 318.502 37.4273 319.2C41.7281 323.501 41.7281 330.499 37.4273 334.8C33.1264 339.101 26.1284 339.101 21.8275 334.8C17.5267 330.499 17.5267 323.501 21.8275 319.2C22.5282 318.5 23.3162 317.898 24.1699 317.411C24.5701 317.183 25.0612 317.262 25.3719 317.573C25.4351 317.636 25.4895 317.707 25.5338 317.785C25.8072 318.265 25.64 318.876 25.1599 319.149ZM35.9056 313.336C35.642 313.821 35.8216 314.429 36.307 314.692C37.4858 315.332 38.5691 316.143 39.5269 317.1C44.9855 322.559 44.9855 331.441 39.5269 336.899C34.0683 342.358 25.1865 342.358 19.7279 336.899C14.2693 331.441 14.2693 322.559 19.7279 317.1C20.6858 316.143 21.7691 315.332 22.9477 314.692C23.4331 314.429 23.6126 313.822 23.3491 313.336C23.302 313.249 23.2439 313.173 23.1775 313.106C22.8724 312.801 22.3917 312.718 21.9931 312.935C20.6454 313.667 19.4076 314.592 18.3137 315.686C15.2917 318.708 13.6274 322.726 13.6274 327C13.6274 331.274 15.2917 335.292 18.3137 338.314C21.3357 341.336 25.3537 343 29.6274 343C33.9011 343 37.9191 341.336 40.9411 338.314C43.9631 335.292 45.6274 331.274 45.6275 327C45.6274 322.726 43.9631 318.708 40.9411 315.686C39.8474 314.593 38.6094 313.667 37.2616 312.935C36.7763 312.671 36.1693 312.851 35.9056 313.336ZM26.799 324.172C26.903 324.068 27.0137 323.968 27.1282 323.876C27.5593 323.531 27.6281 322.901 27.2824 322.471C26.9368 322.04 26.3075 321.971 25.8767 322.317C25.7048 322.454 25.5406 322.602 25.3848 322.757C23.0454 325.097 23.0454 328.903 25.3848 331.243C27.7242 333.582 31.5306 333.582 33.8701 331.243C36.2095 328.903 36.2095 325.097 33.8701 322.757C33.4795 322.367 32.8464 322.367 32.4559 322.757C32.0653 323.148 32.0653 323.781 32.4559 324.172C34.0155 325.731 34.0155 328.269 32.4559 329.828C30.8962 331.388 28.3586 331.388 26.799 329.828C25.2394 328.269 25.2394 325.731 26.799 324.172ZM28.6275 318.779L25.4466 314.894C25.3002 314.715 25.2203 314.491 25.2203 314.26L25.2204 309.194C25.2204 309.003 25.2752 308.816 25.3782 308.655C25.4813 308.494 25.6283 308.366 25.8018 308.286C25.9754 308.206 26.1682 308.177 26.3575 308.203C26.5468 308.229 26.7247 308.309 26.87 308.433L29.6275 310.789L32.3849 308.433C32.5302 308.309 32.708 308.229 32.8973 308.203C33.0866 308.177 33.2795 308.206 33.4531 308.286C33.6266 308.366 33.7736 308.494 33.8767 308.655C33.9797 308.816 34.0345 309.003 34.0345 309.194L34.0344 314.26C34.0345 314.491 33.9545 314.715 33.8082 314.894L30.6275 318.779L30.6274 327C30.6276 327.131 30.6018 327.261 30.5515 327.383C30.5013 327.504 30.4275 327.614 30.3345 327.707C30.2418 327.8 30.1316 327.874 30.0102 327.924C29.8889 327.974 29.7588 328 29.6274 328C29.0751 328 28.6274 327.552 28.6274 327L28.6275 318.779ZM29.6275 316.844L32.0344 313.903L32.0344 311.363L30.2771 312.865C30.096 313.02 29.8657 313.104 29.6275 313.104C29.3894 313.104 29.159 313.02 28.9779 312.865L27.2205 311.363L27.2204 313.903L29.6275 316.844Z"
              fill="black"
            />
          </g>
          <circle
            cx="30"
            cy="1759"
            r="28.5"
            fill="#FDFDFE"
            stroke="#E6E9F1"
            stroke-width="3"
          />
          <g clip-path="url(#clip1_1037_3188)">
            <path
              d="M16.1328 1769.13C16.1328 1771.19 17.8075 1772.87 19.8661 1772.87C21.9248 1772.87 23.5995 1771.19 23.5995 1769.13V1765.4H19.8661C17.8075 1765.4 16.1328 1767.08 16.1328 1769.13ZM22.5328 1769.13C22.5328 1770.6 21.3365 1771.8 19.8661 1771.8C18.3957 1771.8 17.1995 1770.6 17.1995 1769.13C17.1995 1767.66 18.3957 1766.47 19.8661 1766.47H22.5328V1769.13ZM40.1328 1765.4H36.3995V1769.13C36.3995 1771.19 38.0741 1772.87 40.1328 1772.87C42.1909 1772.87 43.8661 1771.19 43.8661 1769.13C43.8661 1767.08 42.1909 1765.4 40.1328 1765.4ZM40.1328 1771.8C38.6624 1771.8 37.4661 1770.6 37.4661 1769.13V1766.47H40.1328C41.6032 1766.47 42.7995 1767.66 42.7995 1769.13C42.7995 1770.6 41.6032 1771.8 40.1328 1771.8Z"
              fill="black"
            />
            <path
              d="M40.1333 1763.27H37.4667V1754.73H40.1333C43.368 1754.73 46 1752.1 46 1748.87C46 1745.63 43.368 1743 40.1333 1743C36.8987 1743 34.2667 1745.63 34.2667 1748.87V1751.53H25.7333V1748.87C25.7333 1745.63 23.1013 1743 19.8667 1743C16.632 1743 14 1745.63 14 1748.87C14 1752.1 16.632 1754.73 19.8667 1754.73H22.5333V1763.27H19.8667C16.632 1763.27 14 1765.9 14 1769.13C14 1772.37 16.632 1775 19.8667 1775C23.1013 1775 25.7333 1772.37 25.7333 1769.13V1766.47H34.2667V1769.13C34.2667 1772.37 36.8987 1775 40.1333 1775C43.368 1775 46 1772.37 46 1769.13C46 1765.9 43.368 1763.27 40.1333 1763.27ZM35.3333 1754.73V1748.87C35.3333 1746.22 37.4869 1744.07 40.1333 1744.07C42.7803 1744.07 44.9333 1746.22 44.9333 1748.87C44.9333 1751.51 42.7803 1753.67 40.1333 1753.67H37.4667V1752.6H40.1333C42.1915 1752.6 43.8667 1750.93 43.8667 1748.87C43.8667 1746.81 42.1915 1745.13 40.1333 1745.13C38.0747 1745.13 36.4 1746.81 36.4 1748.87V1763.27H35.3333V1754.73ZM37.4667 1751.53V1748.87C37.4667 1747.4 38.6629 1746.2 40.1333 1746.2C41.6037 1746.2 42.8 1747.4 42.8 1748.87C42.8 1750.34 41.6037 1751.53 40.1333 1751.53H37.4667ZM25.7333 1752.6H34.2667V1753.67H25.7333V1752.6ZM25.7333 1754.73H34.2667V1763.27H25.7333V1754.73ZM19.8667 1753.67C17.2203 1753.67 15.0667 1751.51 15.0667 1748.87C15.0667 1746.22 17.2203 1744.07 19.8667 1744.07C22.5131 1744.07 24.6667 1746.22 24.6667 1748.87V1763.27H23.6V1748.87C23.6 1746.81 21.9253 1745.13 19.8667 1745.13C17.808 1745.13 16.1333 1746.81 16.1333 1748.87C16.1333 1750.93 17.808 1752.6 19.8667 1752.6H22.5333V1753.67H19.8667ZM22.5333 1748.87V1751.53H19.8667C18.3963 1751.53 17.2 1750.34 17.2 1748.87C17.2 1747.4 18.3963 1746.2 19.8667 1746.2C21.3371 1746.2 22.5333 1747.4 22.5333 1748.87ZM40.1333 1773.93C37.4869 1773.93 35.3333 1771.78 35.3333 1769.13V1765.4H24.6667V1769.13C24.6667 1771.78 22.5131 1773.93 19.8667 1773.93C17.2203 1773.93 15.0667 1771.78 15.0667 1769.13C15.0667 1766.49 17.2203 1764.33 19.8667 1764.33H40.1333C42.7803 1764.33 44.9333 1766.49 44.9333 1769.13C44.9333 1771.78 42.7803 1773.93 40.1333 1773.93Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1037_3188">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(7 327) rotate(-45)"
              />
            </clipPath>
            <clipPath id="clip1_1037_3188">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(14 1743)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="container lg:pt-16 lg:px-16 mx-auto flex flex-col gap-8">
          <FutureSectionTitle
            title="OBSERVABILITY"
            subtitle="Comprehensive insight with an attractive appearance."
            description="Hundreds of the most modern payment services available, connect them according to your needs - The API and data infrastructure we provide will easily help you."
          />

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

            <div className="py-16 flex flex-col gap-6 ">
              <div className=" flex  gap-9 flex-wrap">
                <div>
                  <div className="px-10 max-w-md h-full py-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
                    <div className="max-w-md space-y-4">
                      <h3 className="text-3xl font-semibold">
                        Easily share your data, wherever
                      </h3>
                    </div>
                    <Image src={MonthlyStatistics_left} alt="monthly " />
                  </div>
                </div>
                <div className="grow">
                  <div className="px-10  py-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
                    <div className="max-w-lg space-y-4">
                      <h3 className="text-3xl font-semibold">
                        Detailed and well-organized reports of every payment
                        processed
                      </h3>
                      <p className="text-secondary">
                        From Asana to Zapier, Jira, Salesforce and much more -
                        integrate Servicily with tools your team already uses.
                      </p>
                    </div>
                    <Image src={MonthlyStatistics_left} alt="monthly " />
                  </div>
                </div>
              </div>

              <div className=" flex flex-row-reverse gap-9 flex-wrap">
                <div>
                  <div className="px-10 max-w-md h-full py-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
                    <div className="max-w-xs space-y-4">
                      <h3 className="text-3xl font-semibold">
                      Sync with the tools you have
                      </h3>
                    </div>
                    <Image src={MonthlyStatistics_left} alt="monthly " />
                  </div>
                </div>
                <div className="grow">
                  <div className="px-10  py-5 space-y-5 rounded-3xl bg-[#F6F8FC]">
                    <div className="max-w-lg space-y-4">
                      <h3 className="text-3xl font-semibold">
                      Find the data you are looking for in the data center we have created
                      </h3>
                      <p className="text-secondary">
                      Detailed data reports will also be automatically generated in the form of a more complete .xlsx file.
                      </p>
                    </div>
                    <Image src={MonthlyStatistics_left} alt="monthly " />
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
