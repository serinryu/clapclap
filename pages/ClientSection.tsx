"use client";

import { RadioGroup } from "@headlessui/react";
import { useState } from "react"; 

const years = [
    {
      id: 1,
      name: "10 years from now",
      description: "Envision your future as a 10 years older version of yourself",
    },
    {
      id: 2,
      name: "20 years from now",
      description: "Envision your future as a 20 years older version of yourself",
    },
  ];
//   const times = [
//     { id: 1, name: "Morning" },
//     { id: 2, name: "Afternoon" },
//     { id: 3, name: "Evening" },
//   ];
//   const priority = [
//     { id: 1, name: "Stability" },
//     { id: 2, name: "Freedom & Independence" },
//     { id: 3, name: "Creativity" },
//     { id: 4, name: "Money" },
//   ];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

export default function ClientSection() {
    const [loading, setLoading] = useState(false);

    const [selectedYear, setSelectedYear] = useState(years[0]);

    const [dream, setDream] = useState("");
    const [goal, setGoal] = useState("");
    const [times, setTimes] = useState("");
    const [priority, setPriority] = useState("");
    const [age, setAge] = useState("");
    const [response, setResponse] = useState<String>("");
    const [isDesktop, setIsDesktop] = useState(false);

    const prompt = `My dream is ${dream}. My goal in the next 10 years is ${goal}.`;

    const generateResponse = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setResponse("");
        setLoading(true);

        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt
            }),
        });

        console.log(response);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        // This data is a ReadableStream
        const data = response.body;
        if (!data) {
            return;
        }

        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;

        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);
            setResponse((prev) => prev + chunkValue);
        }
        setLoading(false);
    };

    // 1. At what point in the future do you want to imagine yourself?
    // 2. Write down your dream. Dream Big, Dream Wild.
    // 3. What is your ideal day like? What do you do? What do you eat? Who are you with?

    return (

        <div className="gap-2">
            <div className="flex flex-col items-center gap-2 font-mono md:flex-row">
                <div className="bg-neuborder-neutral-900 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 dark:bg-white">
                <div className="text-2xl text-neutral-50 dark:text-neutral-900">
                    1
                </div>
                </div>
                <p className="font-bold">
                At what point in the future do you want to imagine yourself?
                <span className="text-neutral-400">(Max. 200 characters)</span>
                </p>
            </div>

            <RadioGroup
                value={selectedYear}
                onChange={setSelectedYear}
            >
                <RadioGroup.Label className="sr-only">
                Server size
                </RadioGroup.Label>
                <div className="space-y-4">
                {years.map((years) => (
                    <RadioGroup.Option
                    key={years.name}
                    value={years}
                    className={({ checked, active }) =>
                        classNames(
                        checked
                            ? "border-transparent"
                            : "border-gray-300",
                        active
                            ? "border-blue-500 ring-2 ring-blue-200"
                            : "",
                        "relative cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none flex justify-between"
                        )
                    }
                    >
                    {({ active, checked }) => (
                        <>
                        <span className="flex items-center">
                            <span className="flex flex-col text-sm">
                            <RadioGroup.Label
                                as="span"
                                className="font-medium text-gray-900"
                            >
                                {years.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                                as="span"
                                className="text-gray-500"
                            >
                                <span className="block">
                                {years.description}
                                </span>
                            </RadioGroup.Description>
                            </span>
                        </span>
                        <RadioGroup.Description
                            as="span"
                            className="flex text-sm ml-4 mt-0 flex-col text-right items-center justify-center"
                        >
                            <span className=" text-gray-500">
                            <svg
                                className="w-[28px] h-full"
                                viewBox="0 0 38 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d_34_25)">
                                <g clipPath="url(#clip0_34_25)">
                                    <mask
                                    id="mask0_34_25"
                                    style={{ maskType: "luminance" }}
                                    maskUnits="userSpaceOnUse"
                                    x="3"
                                    y="1"
                                    width="32"
                                    height="24"
                                    >
                                    <rect
                                        x="3"
                                        y="1"
                                        width="32"
                                        height="24"
                                        fill="white"
                                    />
                                    </mask>
                                    <g mask="url(#mask0_34_25)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 1H35V25H3V1Z"
                                        fill="#F7FCFF"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 15.6666V17.6666H35V15.6666H3Z"
                                        fill="#E31D1C"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 19.3334V21.3334H35V19.3334H3Z"
                                        fill="#E31D1C"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 8.33337V10.3334H35V8.33337H3Z"
                                        fill="#E31D1C"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 23V25H35V23H3Z"
                                        fill="#E31D1C"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 12V14H35V12H3Z"
                                        fill="#E31D1C"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 1V3H35V1H3Z"
                                        fill="#E31D1C"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 4.66663V6.66663H35V4.66663H3Z"
                                        fill="#E31D1C"
                                    />
                                    <rect
                                        x="3"
                                        y="1"
                                        width="20"
                                        height="13"
                                        fill="#2E42A5"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.72221 3.93871L3.99633 4.44759L4.2414 3.54198L3.59668 2.96807H4.43877L4.7212 2.229L5.05237 2.96807H5.77022L5.20619 3.54198L5.42455 4.44759L4.72221 3.93871ZM8.72221 3.93871L7.99633 4.44759L8.2414 3.54198L7.59668 2.96807H8.43877L8.7212 2.229L9.05237 2.96807H9.77022L9.20619 3.54198L9.42455 4.44759L8.72221 3.93871ZM11.9963 4.44759L12.7222 3.93871L13.4245 4.44759L13.2062 3.54198L13.7702 2.96807H13.0524L12.7212 2.229L12.4388 2.96807H11.5967L12.2414 3.54198L11.9963 4.44759ZM16.7222 3.93871L15.9963 4.44759L16.2414 3.54198L15.5967 2.96807H16.4388L16.7212 2.229L17.0524 2.96807H17.7702L17.2062 3.54198L17.4245 4.44759L16.7222 3.93871ZM3.99633 8.44759L4.72221 7.93871L5.42455 8.44759L5.20619 7.54198L5.77022 6.96807H5.05237L4.7212 6.229L4.43877 6.96807H3.59668L4.2414 7.54198L3.99633 8.44759ZM8.72221 7.93871L7.99633 8.44759L8.2414 7.54198L7.59668 6.96807H8.43877L8.7212 6.229L9.05237 6.96807H9.77022L9.20619 7.54198L9.42455 8.44759L8.72221 7.93871ZM11.9963 8.44759L12.7222 7.93871L13.4245 8.44759L13.2062 7.54198L13.7702 6.96807H13.0524L12.7212 6.229L12.4388 6.96807H11.5967L12.2414 7.54198L11.9963 8.44759ZM16.7222 7.93871L15.9963 8.44759L16.2414 7.54198L15.5967 6.96807H16.4388L16.7212 6.229L17.0524 6.96807H17.7702L17.2062 7.54198L17.4245 8.44759L16.7222 7.93871ZM3.99633 12.4476L4.72221 11.9387L5.42455 12.4476L5.20619 11.542L5.77022 10.9681H5.05237L4.7212 10.229L4.43877 10.9681H3.59668L4.2414 11.542L3.99633 12.4476ZM8.72221 11.9387L7.99633 12.4476L8.2414 11.542L7.59668 10.9681H8.43877L8.7212 10.229L9.05237 10.9681H9.77022L9.20619 11.542L9.42455 12.4476L8.72221 11.9387ZM11.9963 12.4476L12.7222 11.9387L13.4245 12.4476L13.2062 11.542L13.7702 10.9681H13.0524L12.7212 10.229L12.4388 10.9681H11.5967L12.2414 11.542L11.9963 12.4476ZM16.7222 11.9387L15.9963 12.4476L16.2414 11.542L15.5967 10.9681H16.4388L16.7212 10.229L17.0524 10.9681H17.7702L17.2062 11.542L17.4245 12.4476L16.7222 11.9387ZM19.9963 4.44759L20.7222 3.93871L21.4245 4.44759L21.2062 3.54198L21.7702 2.96807H21.0524L20.7212 2.229L20.4388 2.96807H19.5967L20.2414 3.54198L19.9963 4.44759ZM20.7222 7.93871L19.9963 8.44759L20.2414 7.54198L19.5967 6.96807H20.4388L20.7212 6.229L21.0524 6.96807H21.7702L21.2062 7.54198L21.4245 8.44759L20.7222 7.93871ZM19.9963 12.4476L20.7222 11.9387L21.4245 12.4476L21.2062 11.542L21.7702 10.9681H21.0524L20.7212 10.229L20.4388 10.9681H19.5967L20.2414 11.542L19.9963 12.4476ZM6.72221 5.93871L5.99633 6.44759L6.2414 5.54198L5.59668 4.96807H6.43877L6.7212 4.229L7.05237 4.96807H7.77022L7.20619 5.54198L7.42455 6.44759L6.72221 5.93871ZM9.99633 6.44759L10.7222 5.93871L11.4245 6.44759L11.2062 5.54198L11.7702 4.96807H11.0524L10.7212 4.229L10.4388 4.96807H9.59668L10.2414 5.54198L9.99633 6.44759ZM14.7222 5.93871L13.9963 6.44759L14.2414 5.54198L13.5967 4.96807H14.4388L14.7212 4.229L15.0524 4.96807H15.7702L15.2062 5.54198L15.4245 6.44759L14.7222 5.93871ZM5.99633 10.4476L6.72221 9.93871L7.42455 10.4476L7.20619 9.54198L7.77022 8.96807H7.05237L6.7212 8.229L6.43877 8.96807H5.59668L6.2414 9.54198L5.99633 10.4476ZM10.7222 9.93871L9.99633 10.4476L10.2414 9.54198L9.59668 8.96807H10.4388L10.7212 8.229L11.0524 8.96807H11.7702L11.2062 9.54198L11.4245 10.4476L10.7222 9.93871ZM13.9963 10.4476L14.7222 9.93871L15.4245 10.4476L15.2062 9.54198L15.7702 8.96807H15.0524L14.7212 8.229L14.4388 8.96807H13.5967L14.2414 9.54198L13.9963 10.4476ZM18.7222 5.93871L17.9963 6.44759L18.2414 5.54198L17.5967 4.96807H18.4388L18.7212 4.229L19.0524 4.96807H19.7702L19.2062 5.54198L19.4245 6.44759L18.7222 5.93871ZM17.9963 10.4476L18.7222 9.93871L19.4245 10.4476L19.2062 9.54198L19.7702 8.96807H19.0524L18.7212 8.229L18.4388 8.96807H17.5967L18.2414 9.54198L17.9963 10.4476Z"
                                        fill="#F7FCFF"
                                    />
                                    </g>
                                    <rect
                                    x="3"
                                    y="1"
                                    width="32"
                                    height="24"
                                    fill="url(#paint0_linear_34_25)"
                                    style={{ mixBlendMode: "overlay" }}
                                    />
                                </g>
                                <rect
                                    x="3.5"
                                    y="1.5"
                                    width="31"
                                    height="23"
                                    rx="1.5"
                                    stroke="black"
                                    strokeOpacity="0.1"
                                    style={{ mixBlendMode: "multiply" }}
                                />
                                </g>
                                <defs>
                                <filter
                                    id="filter0_d_34_25"
                                    x="0"
                                    y="0"
                                    width="38"
                                    height="30"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                    />
                                    <feOffset dy="2" />
                                    <feGaussianBlur stdDeviation="1.5" />
                                    <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_34_25"
                                    />
                                    <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_34_25"
                                    result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_34_25"
                                    x1="19"
                                    y1="1"
                                    x2="19"
                                    y2="25"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                    stopColor="white"
                                    stopOpacity="0.7"
                                    />
                                    <stop offset="1" stopOpacity="0.3" />
                                </linearGradient>
                                <clipPath id="clip0_34_25">
                                    <rect
                                    x="3"
                                    y="1"
                                    width="32"
                                    height="24"
                                    rx="2"
                                    fill="white"
                                    />
                                </clipPath>
                                </defs>
                            </svg>
                            </span>
                            <span className="font-medium text-gray-900">
                            EN
                            </span>
                        </RadioGroup.Description>
                        <span
                            className={classNames(
                            active ? "border" : "border-2",
                            checked
                                ? "border-blue-500"
                                : "border-transparent",
                            "pointer-events-none absolute -inset-px rounded-lg"
                            )}
                            aria-hidden="true"
                        />
                        </>
                    )}
                    </RadioGroup.Option>
                ))}
                </div>
            </RadioGroup>

            <div className="flex flex-col items-center gap-2 font-mono md:flex-row">
                <div className="bg-neuborder-neutral-900 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 dark:bg-white">
                <div className="text-2xl text-neutral-50 dark:text-neutral-900">
                    2
                </div>
                </div>
                <p className="font-bold">
                Write down your dream. Dream Big, Dream Wild.
                <span className="text-neutral-400">(Max. 200 characters)</span>
                </p>
            </div>

            <textarea
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            rows={4}
            maxLength={200}
            className="focus:ring-neu w-full rounded-md border border-neutral-400
                p-4 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900"
            placeholder={"e.g. Write down your dream in your lifetime. Dream Big, Dream Wild."}
            />

            <div className="flex flex-col items-center gap-2 font-mono md:flex-row">
                <div className="bg-neuborder-neutral-900 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 dark:bg-white">
                <div className="text-2xl text-neutral-50 dark:text-neutral-900">
                    3
                </div>
                </div>
                <p className="font-bold">
                What is your ideal day like? What do you do? What do you eat? Who are you with?
                </p>
            </div>

            <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            rows={4}
            maxLength={200}
            className="focus:ring-neu w-full rounded-md border border-neutral-400
                p-4 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900"
            placeholder={"e.g. What do you want to achieve in the next 10 years?"}
            />

            {!loading ? (
            <button
                className="w-full rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-black/80"
                onClick={(e) => generateResponse(e)}
            >
                Envision &rarr;
            </button>
            ) : (
            <button
                disabled
                className="w-full rounded-xl bg-neutral-900 px-4 py-2 font-medium text-white"
            >
                <div className="animate-pulse font-bold tracking-widest">...</div>
            </button>
            )}
            {response && (
            <div className="mt-8 rounded-xl border bg-white p-4 shadow-md transition hover:bg-gray-100">
                {response}
            </div>
            )}
        </div>
    );
}