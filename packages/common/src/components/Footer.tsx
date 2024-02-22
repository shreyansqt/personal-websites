import { FC } from 'react';
import { Link } from './Link';

export const Footer: FC = () => {
  return (
    <footer className="px-4">
      <div className="container">
        <div className="row justify-center">
          <div className="col-12 md:col-10 lg:col-8">
            <div className="row items-center border-t border-t-baby-peach py-8 dark:border-t-cobalt md:py-14">
              <div className="col-12 md:col-8 lg:col-6">
                <h4 className="text-bold mb-2 text-2xl">Liked what you see?</h4>
                <p className="mb-4 text-gray dark:text-light-gray">
                  Let&apos;s connect to work together on solving challenging
                  design complications together or just to say hello!
                </p>
                <Link href="mailto:hello@srish.me" isExternal>
                  hello@srish.me
                </Link>
              </div>
              <div className="col-12 mt-8 md:col-4 lg:col-6 md:mt-0">
                <ul className="flex justify-between md:flex-col md:items-end">
                  <li className="my-2">
                    <Link
                      href="https://www.linkedin.com/in/srishmatta/"
                      isExternal
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link href="https://dribbble.com/srishmatta" isExternal>
                      Dribbble
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link
                      href="/Matta_Srishti_Resume.pdf"
                      isExternal
                      canDownload
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
