"use client";
import style from "./loader.module.scss";
import { AnimatePresence, motion } from "framer-motion";

function LoaderSite({ loading }: { loading?: boolean }) {
  return (
    <AnimatePresence>
      <motion.div
        className={style.loader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0.3, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: -180,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <svg
            width="400"
            height="400"
            viewBox="0 0 83 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.82666 11.8216C7.05686 11.8216 6.57573 12.6549 6.96063 13.3216L9.90337 18.4185C10.2883 19.0852 11.2505 19.0852 11.6354 18.4185L14.5782 13.3216C14.9631 12.6549 14.4819 11.8216 13.7121 11.8216L7.82666 11.8216ZM3.74903 7.75891C3.92766 8.06831 4.25779 8.25891 4.61505 8.25891L16.9237 8.25891C17.281 8.25891 17.6111 8.06831 17.7898 7.75891L21.4034 1.5C21.7883 0.83333 21.3071 -1.9276e-06 20.5373 -1.9949e-06L1.00147 -3.70278e-06C0.231666 -3.77008e-06 -0.249459 0.83333 0.135442 1.5L3.74903 7.75891Z"
              fill="#D98181"
            />
            <circle cx="73" cy="10" r="9" stroke="#97BBC4" strokeWidth="2" />
            <line
              x1="63.9091"
              y1="9.90909"
              x2="82.0909"
              y2="9.90909"
              stroke="#97BBC4"
              strokeWidth="2"
            />
            <line
              x1="73.0909"
              y1="0.909088"
              x2="73.0909"
              y2="19.0909"
              stroke="#97BBC4"
              strokeWidth="2"
            />
            <circle cx="11" cy="65" r="9" stroke="#EDDB65" strokeWidth="2" />
            <circle cx="11.5263" cy="64.4737" r="2.10526" fill="#EDDB65" />
            <path
              d="M65.4612 70C68.0119 73.4797 75.8612 76.9168 81.4612 70"
              stroke="#7DB6AA"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M81.4612 61C78.9105 56.6504 71.0612 52.354 65.4612 61"
              stroke="#7DB6AA"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="77.4612" cy="67" r="2" fill="#7DB6AA" />
            <ellipse
              cx="69.4612"
              cy="63"
              rx="2"
              ry="2"
              transform="rotate(-180 69.4612 63)"
              fill="#7DB6AA"
            />
            <path
              d="M42.366 43.5C41.9811 44.1667 41.0189 44.1667 40.634 43.5L35.8708 35.25C35.4859 34.5833 35.9671 33.75 36.7369 33.75L46.2631 33.75C47.0329 33.75 47.5141 34.5833 47.1292 35.25L42.366 43.5Z"
              fill="#D9D9D9"
            />
            <path
              d="M38 38L36 46.5M41.5 38V46.5M45 38L47.5 46.5"
              stroke="#D9D9D9"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect x="34" y="30" width="15" height="2" rx="1" fill="#D9D9D9" />
          </svg>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
export default LoaderSite;
