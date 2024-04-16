import React from 'react'

const Navbar = ({setVisible}) => {
  return (
    <div className='pl-6 pt-6 grid grid-cols-2 w-full items-center'>
                   <a href='/'>
                     <div className='text-2xl font-sans font-semibold flex items-center'>
                     <svg className="w-[103px] h-[28px]">
                    <g><path fill-rule="evenodd" clip-rule="evenodd" d="M17.1189 11.826C16.5477 11.527 15.9127 11.3709 15.268 11.3709C14.6236 11.3709 13.9886 11.527 13.4173 11.826C13.1412 11.9815 12.8885 12.1757 12.6672 12.4027V6.99756H10.1797V20.7407H12.6672V15.4751C12.6599 15.1368 12.7415 14.8025 12.904 14.5057C13.0575 14.2331 13.2845 14.0093 13.5593 13.8598C13.8515 13.7045 14.1784 13.6259 14.5092 13.6314C14.7547 13.6188 15.0001 13.6579 15.2294 13.7461C15.4588 13.8342 15.6672 13.9695 15.8411 14.1432C16.015 14.317 16.1507 14.5252 16.2391 14.7546C16.3278 14.984 16.3671 15.2295 16.3551 15.4751V20.7407H18.844V14.9243C18.8566 14.2802 18.6993 13.6442 18.3875 13.0806C18.0882 12.5534 17.6492 12.1192 17.1189 11.826ZM6.2929 18.3931C5.93527 18.5433 5.55043 18.6176 5.16265 18.6116C4.73353 18.6188 4.31035 18.5105 3.9374 18.298C3.57793 18.0902 3.28225 17.7878 3.08235 17.4237C2.86861 17.0304 2.76061 16.5883 2.76893 16.1407C2.75772 15.6927 2.86588 15.2499 3.08235 14.8576C3.28713 14.502 3.58207 14.2068 3.9374 14.0019C4.31069 13.7903 4.73372 13.6824 5.16265 13.6894C5.54296 13.6848 5.92039 13.7558 6.27314 13.8981C6.60257 14.0339 6.89764 14.2414 7.13686 14.5057L8.73229 12.8905C8.29507 12.4007 7.75709 12.0114 7.15535 11.7494C6.52565 11.4791 5.84652 11.3433 5.16138 11.3505C4.28116 11.3394 3.41335 11.5591 2.64429 11.9877C1.89874 12.396 1.27907 13.0006 0.852332 13.7361C0.42561 14.4717 0.208078 15.31 0.223415 16.1604C0.210751 17.0053 0.428766 17.8377 0.85384 18.5678C1.27891 19.2978 1.89499 19.8979 2.63566 20.3035C3.40882 20.7286 4.27931 20.9449 5.16138 20.9308C5.84652 20.9381 6.52565 20.8022 7.15535 20.532C7.76829 20.2617 8.31831 19.8669 8.77048 19.3724L7.15535 17.7559C6.92011 18.0313 6.62513 18.2492 6.2929 18.3931ZM26.4532 11.7692C26.7868 11.9381 27.0888 12.1638 27.3453 12.436V11.5605H29.813V20.7407H27.3453V19.8516C27.087 20.1228 26.7854 20.3493 26.4532 20.522C25.9066 20.8012 25.2998 20.9417 24.6863 20.9308C23.8889 20.9417 23.105 20.724 22.4272 20.3035C21.7568 19.8864 21.2119 19.2952 20.8503 18.5931C20.4752 17.8336 20.28 16.9978 20.28 16.1506C20.28 15.3033 20.4752 14.4675 20.8503 13.7079C21.2117 13.0056 21.7566 12.4145 22.4272 11.9976C23.105 11.577 23.8889 11.3594 24.6863 11.3703C25.2988 11.3593 25.9048 11.4961 26.4532 11.7692ZM25.1428 18.6315C25.8397 18.6307 26.4031 18.3993 26.8333 17.9374C27.2634 17.4748 27.4785 16.8758 27.4785 16.1407C27.4872 15.6954 27.3865 15.2547 27.1848 14.8576C26.9989 14.496 26.7161 14.1932 26.3681 13.9833C25.9961 13.7684 25.5724 13.6599 25.1428 13.6697C24.7195 13.6611 24.3018 13.7697 23.9361 13.9833C23.5882 14.1929 23.3056 14.4958 23.1204 14.8576C22.918 15.2545 22.8167 15.6952 22.8256 16.1407C22.8155 16.5926 22.9168 17.0401 23.1204 17.4435C23.306 17.8051 23.5884 18.1079 23.9361 18.3177C24.3018 18.5314 24.7195 18.6399 25.1428 18.6315ZM38.0715 11.5889C37.6906 11.4381 37.2839 11.3639 36.8745 11.3703C35.8487 11.3703 35.064 11.6963 34.5203 12.3483L34.5006 12.3743V11.5605H32.0131V20.7407H34.5006V15.6652C34.5006 14.9811 34.6684 14.4711 35.0041 14.1352C35.1754 13.9669 35.379 13.8354 35.6029 13.7488C35.8266 13.6622 36.0658 13.6222 36.3056 13.6314C36.5354 13.6275 36.7639 13.6664 36.9794 13.7462C37.1716 13.8193 37.344 13.9364 37.4829 14.0883L39.04 12.3014C38.7764 11.9922 38.445 11.7483 38.0715 11.5889ZM45.2748 11.7692C45.6087 11.9381 45.911 12.1637 46.1681 12.436L46.1717 11.5605H48.6395V20.7407H46.1717V19.8516C45.9128 20.1228 45.6111 20.3493 45.2785 20.522C44.7323 20.8012 44.1259 20.9415 43.5128 20.9308C42.715 20.9417 41.9307 20.724 41.2523 20.3035C40.5821 19.8864 40.0372 19.2952 39.6755 18.5931C39.3005 17.8336 39.1055 16.9978 39.1055 16.1506C39.1055 15.3033 39.3005 14.4675 39.6755 13.7079C40.0358 13.006 40.5795 12.415 41.2486 11.9976C41.927 11.5771 42.7112 11.3594 43.509 11.3703C44.1211 11.3594 44.7267 11.4962 45.2748 11.7692ZM43.9645 18.6315C44.6612 18.6307 45.2246 18.3993 45.6548 17.9375C46.0851 17.4748 46.3002 16.8758 46.3002 16.1407C46.3088 15.6954 46.2079 15.2547 46.0065 14.8576C45.821 14.4957 45.538 14.1929 45.1896 13.9833C44.8176 13.7684 44.3938 13.6599 43.9645 13.6697C43.5414 13.6613 43.1243 13.7699 42.759 13.9833C42.4103 14.1925 42.1273 14.4954 41.9421 14.8576C41.7397 15.2545 41.6384 15.6952 41.6472 16.1407C41.637 16.5926 41.7383 17.0401 41.9421 17.4435C42.1277 17.8054 42.4105 18.1083 42.759 18.3177C43.1243 18.5312 43.5414 18.6397 43.9645 18.6315ZM56.3008 18.3931C55.943 18.5431 55.5583 18.6176 55.1705 18.6116C54.7414 18.6192 54.318 18.5109 53.9452 18.298C53.5856 18.0906 53.2897 17.7881 53.0901 17.4237C52.8764 17.0304 52.7685 16.5883 52.7767 16.1407C52.7655 15.6927 52.8738 15.2499 53.0901 14.8576C53.2947 14.5018 53.5896 14.2065 53.9452 14.0019C54.3184 13.79 54.7416 13.6822 55.1705 13.6894C55.5508 13.6846 55.9283 13.7555 56.2809 13.8981C56.6105 14.0337 56.9056 14.2413 57.1446 14.5057L58.7388 12.8905C58.302 12.4007 57.7645 12.0114 57.1631 11.7494C56.5334 11.4794 55.8544 11.3436 55.1691 11.3505C54.2889 11.3394 53.4211 11.5591 52.6521 11.9877C51.9065 12.396 51.2868 13.0006 50.8601 13.7361C50.4333 14.4717 50.2159 15.31 50.2311 16.1604C50.2187 17.0052 50.4366 17.8373 50.8615 18.5674C51.2862 19.2972 51.9019 19.8976 52.6422 20.3035C53.4159 20.7286 54.2867 20.9447 55.1691 20.9308C55.8544 20.9379 56.5334 20.802 57.1631 20.532C57.7758 20.2621 58.3256 19.8671 58.777 19.3724L57.1631 17.7559C56.9277 18.031 56.6329 18.249 56.3008 18.3931ZM61.3805 7.7385H63.8694V11.5592H66.015V13.745H63.8694V20.7407H61.3805V13.745H59.2349V11.5592H61.3805V7.7385ZM73.7538 11.9495C73.041 11.5413 72.2308 11.3343 71.4094 11.3505C70.5509 11.3404 69.7053 11.5604 68.9603 11.9877C68.2417 12.3965 67.6425 12.9861 67.2218 13.6981C66.8944 14.2475 66.6809 14.8573 66.5941 15.4911C66.5072 16.1249 66.5486 16.7697 66.7163 17.3871C66.8839 18.0045 67.174 18.5818 67.5692 19.0846C67.9645 19.5873 68.4568 20.0052 69.017 20.3133C69.805 20.7351 70.6878 20.9475 71.5811 20.9308C72.2937 20.9373 73.0004 20.8016 73.6601 20.532C74.2873 20.2741 74.8439 19.8701 75.2839 19.3539L73.8217 17.8893C73.552 18.1999 73.2141 18.4442 72.8346 18.603C72.4302 18.7658 71.9972 18.8464 71.5612 18.8401C71.0844 18.8502 70.6132 18.7358 70.1941 18.5079C69.8036 18.29 69.488 17.9589 69.2886 17.5583C69.204 17.3909 69.1374 17.2149 69.0898 17.0335L75.7934 17.0162C75.8395 16.8253 75.8744 16.632 75.8984 16.437C76.0041 15.4528 75.8121 14.4594 75.3468 13.5857C74.9729 12.9065 74.4226 12.3412 73.7538 11.9495ZM69.0924 15.1688C69.1362 15.0027 69.1965 14.8413 69.2725 14.6872C69.4568 14.3003 69.7507 13.9761 70.1178 13.7549C70.5091 13.5271 70.9558 13.4121 71.4082 13.4227C71.8237 13.4091 72.2346 13.5113 72.5952 13.7178C72.9218 13.9185 73.1799 14.2134 73.3355 14.5637C73.4215 14.7534 73.4869 14.9517 73.5305 15.1552L69.0924 15.1688ZM84.4949 12.3014L82.9365 14.0883C82.798 13.9365 82.6261 13.8193 82.4342 13.7462C82.2183 13.6663 81.9893 13.6273 81.7594 13.6314C81.5196 13.6221 81.2806 13.662 81.0571 13.7486C80.8333 13.8353 80.6297 13.9668 80.4589 14.1352C80.1232 14.4711 79.9553 14.9811 79.9553 15.6652V20.7407H77.4666V11.5605H79.9553V12.3743L79.9738 12.3483C80.5194 11.6963 81.3045 11.3703 82.3295 11.3703C82.7387 11.3641 83.1453 11.4383 83.5263 11.5889C83.8995 11.7486 84.231 11.9925 84.4949 12.3014ZM83.5928 17.7757C83.3843 17.7683 83.1767 17.805 82.9833 17.8836C82.7902 17.9621 82.6155 18.0805 82.4712 18.2313C82.1903 18.5374 82.0346 18.9376 82.0346 19.3533C82.0346 19.7688 82.1903 20.1692 82.4712 20.4751C82.6155 20.6259 82.7902 20.7443 82.9833 20.8229C83.1767 20.9015 83.3843 20.9383 83.5928 20.9308C83.798 20.9365 84.002 20.8989 84.1918 20.8205C84.3813 20.7419 84.5524 20.6243 84.6935 20.4751C84.9743 20.1692 85.1301 19.7688 85.1301 19.3533C85.1301 18.9376 84.9743 18.5374 84.6935 18.2313C84.5524 18.0821 84.3813 17.9645 84.1918 17.886C84.002 17.8075 83.798 17.7699 83.5928 17.7757ZM92.8271 11.7692C93.1608 11.9381 93.4627 12.1638 93.7192 12.436L93.7156 11.5605H96.1834V20.7443H93.7156V19.8552C93.4571 20.1264 93.1558 20.3529 92.8235 20.5258C92.2768 20.8048 91.6701 20.9451 91.0567 20.9345C90.2587 20.9453 89.4745 20.7276 88.7961 20.3071C88.1261 19.89 87.5816 19.299 87.2204 18.5969C86.8455 17.8373 86.6503 17.0015 86.6503 16.1543C86.6503 15.307 86.8455 14.4712 87.2204 13.7116C87.5814 13.0093 88.1259 12.4182 88.7961 12.0013C89.4751 11.5789 90.2609 11.36 91.0603 11.3703C91.6727 11.3594 92.2788 11.4962 92.8271 11.7692ZM91.5156 18.6315C92.2114 18.6307 92.7749 18.3993 93.206 17.9374H93.2022C93.6334 17.4748 93.8501 16.8758 93.8525 16.1407C93.8609 15.6953 93.7596 15.2546 93.5576 14.8576C93.3721 14.4957 93.0893 14.1929 92.7407 13.9833C92.3688 13.7684 91.9449 13.6599 91.5156 13.6697C91.0926 13.6613 90.6755 13.7699 90.3101 13.9833C89.9618 14.1929 89.6787 14.4957 89.4932 14.8576C89.2918 15.2547 89.1909 15.6954 89.1995 16.1407C89.1897 16.5924 89.2904 17.0397 89.4932 17.4435C89.6791 17.8052 89.962 18.1079 90.3101 18.3177C90.6755 18.5312 91.0926 18.6397 91.5156 18.6315ZM100.895 11.5592H98.3883V20.7407H100.895V11.5592ZM100.194 9.98186C100.019 10.0523 99.8305 10.0849 99.6419 10.0774C99.455 10.083 99.2691 10.0495 99.096 9.97914C98.9227 9.90875 98.7664 9.803 98.6363 9.66863C98.3798 9.39413 98.2373 9.03239 98.2373 8.65663C98.2373 8.28086 98.3798 7.91912 98.6363 7.64465C98.9046 7.37656 99.2683 7.22598 99.6474 7.22598C100.027 7.22598 100.39 7.37656 100.659 7.64465C100.91 7.92192 101.048 8.28259 101.048 8.65663C101.048 9.03066 100.91 9.39135 100.659 9.66863C100.528 9.80467 100.369 9.9114 100.194 9.98186Z" fill="currentColor"></path></g>
                     </svg>
                     </div>
                   </a>               
                   <button onClick={setVisible} className='z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 hover:bg-surface-elevation-1 text-tiny gap-2 rounded-full hover:bg-zinc-800 hover:transition delay-200 duration-200 ease-in-out  bg-ghost text-primary min-w-8 w-8 h-8  justify-self-end mr-2 '>
                   <svg xmlns="http://www.w3.org/2000/svg" className=' w-4 min-h-4 h-full' viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_3610_3218)">
                        <path d="M6.4 4.8002L3.2 8.0002L6.4 11.2002" stroke="#A2A2AC" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>
                   <path d="M12.4 4.8002L9.19999 8.0002L12.4 11.2002" stroke="#A2A2AC" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round">
                    </path></g><defs><clipPath id="clip0_3610_3218">
                        <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)"></rect></clipPath></defs></svg>
                   </button>
                </div>
  )
}

export default Navbar