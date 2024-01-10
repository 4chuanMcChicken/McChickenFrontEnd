import Image from '@/components/Image'
import './Resume.css' // 导入样式文件

export default function resume() {
  const frameworks = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg',
  ]
  return (
    <>
      <div className="flex flex-col divide-y">
        <div className="py-3 text-center font-bold tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Yizhou Li
        </div>

        <div>
          <div className="my-1 pb-1 pt-5 font-bold tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 lg:my-3">
            Skills
          </div>
          <div className="mt-5 ">
            <p className="my-5 font-thin lg:text-xl">
              <span className="font-medium">Programming Language:</span> Python, Java, JavaScript,
              TypeScript, HTML5/CSS, SQL, C/C++
            </p>
            <div className="my-5 font-medium lg:text-xl" style={{ display: 'flex' }}>
              Frameworks:
              {frameworks.map((src, index) => (
                <div key={index} className="mx-3">
                  <Image src={src} alt={`framework-${index}`} width={60} height={60} />
                </div>
              ))}
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
            <div className="mt-5 basis-2/3" style={{ minWidth: '230px' }}>
              <div>
                <p className="my-1 lg:text-3xl">Full Stack Developer</p>
                <p className="my-1 font-thin lg:text-xl">Genvoice Telecom</p>
                <p className="text-gray-500">2021 - 2023</p>
              </div>
              <ul className="mt-3">
                <li className="my-4 text-xl">
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
                <li className="my-4 text-xl">
                  • Developed over 10 new features, including utilizing WebSockets and Redis to
                  construct a real-time private messaging system, post collection, createing sitemap
                  for Google SEO, calling OpenAI for post content translation, configuring a beta
                  environment using HAProxy for user testing of new features, etc.
                </li>
                <li className="my-4 text-xl">
                  • Designed an email system capable of sending daily incoming statistics, and
                  private message notifications emails.
                </li>
                <li className="my-4 text-xl">
                  • Implemented unit and integreted test using Mocha, increased system's
                  reliability.
                </li>
                <li className="my-4 text-xl">
                  • Participated in the development of the web user interface using Vue 3 and
                  TypeScript, utilized Axios for efficient management of HTTP requests, and
                  implemented dynamic routing with Vue Router.
                </li>
                <li className="my-4 text-xl">
                  • Leveraged Pinia for state management and TDesign and Vant for responsive
                  components catering to both web and mobile platforms, and capable of a bilingual
                  interface switch between Chinese and English.
                </li>
                <li className="my-4 text-xl">
                  • Performed routine updates using Docker and AWS, leveraging Git for version
                  control.
                </li>
                <li className="my-4 text-xl">
                  • Developed an AI QRCode generator for both front-end and back-end integrated with
                  stable-diffusion, using Python, FastAPI and Vuetify. Deployed the project on
                  RunPod using Docker, achieving 300+ daily usage.
                </li>
                <li className="my-4 text-xl">• Actively participated in Agile development.</li>
              </ul>
            </div>
          </div>
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
      </div>
    </>
  )
}
