import Image from '@/components/Image'
import './Resume.css' // 导入样式文件

export default function resume() {
  return (
    <>
      <div className="flex flex-col divide-y">
        <div className="py-3 text-center font-bold tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Yizhou Li
        </div>
        <div>
          <div className="my-1 pb-1 pt-5 font-bold tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 lg:my-3">
            Education
          </div>
          <div className="flex flex-row">
            <div className="my-2 mr-10 w-1/4 basis-1/2 lg:my-5 lg:w-1/6 lg:basis-1/4 ">
              <Image
                src="/static/images/Western_University_logo.png"
                alt="Western University"
                width={130}
                height={130}
                className="rounded-full"
              />
            </div>
            <div className="mt-5 ">
              <p className="my-1 lg:text-3xl">Western University</p>
              <p className="my-1 font-thin lg:text-xl">
                Master {'\u00A0'} | {'\u00A0'} Computer Science, specializing in Bioinformatics
              </p>
              <p className="text-gray-500">2021 - 2023</p>
            </div>
          </div>

          <div className="mb-5 flex flex-row">
            <div className="my-2 mr-10 w-1/4 basis-1/2 lg:my-5 lg:w-1/6 lg:basis-1/4">
              <Image
                src="/static/images/Southeast_University_logo.png"
                alt="Southeast University"
                width={130}
                height={130}
                className="rounded-full "
              />
            </div>
            <div className="mt-5" style={{ minWidth: '230px' }}>
              <p className="my-1 lg:text-3xl">Southeast University</p>
              <p className=" my-1 font-thin lg:text-xl">
                Bachelor {'\u00A0'} | {'\u00A0'} Computer Science
              </p>
              <p className="text-gray-500">2016 - 2020</p>
            </div>
          </div>
        </div>

        <div>
          <div className="my-1 pb-1 pt-5 font-bold tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 lg:my-3">
            Working experience
          </div>
          <div className="flex flex-row">
            <div className="my-2 mr-10 w-1/4 basis-1/2 lg:my-5 lg:w-1/6 lg:basis-1/4">
              <Image
                src="/static/images/Genvoice_Telecom_logo.png"
                alt="Western University"
                width={130}
                height={130}
                className="rounded-full"
              />
            </div>
            <div className="mt-5 basis-1/2" style={{ minWidth: '230px' }}>
              <div>
                <p className="my-1 lg:text-3xl">Full Stack Developer</p>
                <p className="my-1 font-thin lg:text-xl">Genvoice Telecom</p>
                <p className="text-gray-500">2021 - 2023</p>
              </div>
              <ul className="mt-3">
                <li className="my-4">
                  • Developed both frontend and backend of a subscription-based Web platform{' '}
                  <a
                    href={'http://app.unifans.io'}
                    className="font-medium text-blue-400 dark:text-blue-400"
                  >
                    "Unifans"
                  </a>
                  , utilizing Node.js, Vue.js, Koa.js, NoSQL database CouchDB, and Wasabi for cloud
                  storage.
                </li>
                <li className="my-4">
                  • Developed over 10 new features, including utilizing WebSockets and Redis to
                  construct a real-time private messaging system, post collection, createing sitemap
                  for Google SEO, calling OpenAI for post content translation, configuring a beta
                  environment using HAProxy for user testing of new features, etc.
                </li>
                <li className="my-4">
                  • Designed an email system capable of sending daily incoming statistics, and
                  private message notifications emails.
                </li>
                <li className="my-4">
                  • Implemented unit and integreted test using Mocha, increased system's
                  reliability.
                </li>
                <li className="my-4">
                  • Participated in the development of the web user interface using Vue 3 and
                  TypeScript, utilized Axios for efficient management of HTTP requests, and
                  implemented dynamic routing with Vue Router.
                </li>
                <li className="my-4">
                  • Leveraged Pinia for state management and TDesign and Vant for responsive
                  components catering to both web and mobile platforms, and capable of a bilingual
                  interface switch between Chinese and English.
                </li>
                <li className="my-4">
                  • Performed routine updates using Docker and AWS, leveraging Git for version
                  control.
                </li>
                <li className="my-4">
                  • Developed an AI QRCode generator for both front-end and back-end integrated with
                  stable-diffusion, using Python, FastAPI and Vuetify. Deployed the project on
                  RunPod using Docker, achieving 300+ daily usage.
                </li>
                <li className="my-4">• Actively participated in Agile development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
