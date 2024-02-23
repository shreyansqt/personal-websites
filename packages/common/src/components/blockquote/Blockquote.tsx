import { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import QuoteStart from "./quote-start.svg";
import QuoteEnd from "./quote-end.svg";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export const Blockquote: FC<Props> = ({ children }) => {
  return (
    <blockquote
      className={`relative my-8 border-none p-0 ${styles.blockquote}`}
    >
      {/* Quote Start */}
      <svg
        width="97"
        height="96"
        viewBox="0 0 97 96"
        className={`absolute m-0 size-16 text-baby-peach text-opacity-50 dark:text-black dark:text-opacity-20 ${styles.quoteStart}`}
      >
        <path
          d="M0.0576193 96V46.1076C0.0576193 17.548 13.1336 5.50524 38.6487 -1.56559e-06V19.2695C22.3824 26.4952 22.3824 30.6241 22.3824 48.5173H41.5191V96H0.0576193ZM54.5961 96C54.5961 78.4509 54.5961 61.247 54.5961 43.6978C54.5961 29.2466 57.1476 19.9553 67.9921 11.0093C75.6464 4.8159 84.5763 2.06328 93.8262 1.37512V19.6112C78.1989 26.1487 76.2842 29.5895 76.2842 48.5149H96.0576V96H54.5961Z"
          fill="currentColor"
        />
      </svg>

      {children}

      {/* Quote End */}
      {/* <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        className={styles.quoteEnd}
      >
        <path
          d="M96 0V49.8924C96 78.452 82.924 90.4948 57.4089 96V76.7305C73.6752 69.5048 73.6752 65.3759 73.6752 47.4827H54.5385V0H96ZM41.4615 0C41.4615 17.5491 41.4615 34.753 41.4615 52.3022C41.4615 66.7534 38.9101 76.0447 28.0655 84.9907C20.4113 91.1841 11.4813 93.9367 2.23138 94.6249V76.3888C17.8587 69.8513 19.7734 66.4105 19.7734 47.4851H0V0H41.4615Z"
          fill="currentColor"
        />
      </svg> */}
    </blockquote>
  );
};
