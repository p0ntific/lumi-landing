"use client";
import Image from "next/image";
import { Button } from "@heroui/react";
import headerBg from "@/public/images/header-bg.webp";
import howWeHelpImg from "@/public/images/how-we-help.png";
import forYou1 from "@/public/images/for-you-1.png";
import forYou2 from "@/public/images/for-you-2.png";
import forYou3 from "@/public/images/for-you-3.png";
import girlsImg from "@/public/images/girls.png";
import arinaImg from "@/public/images/arina.png";
import serumCream from "@/public/images/serum-and-face-cream.webp";
import bottomBg from "@/public/images/bottom-bg.webp";

const LUMI_BLACK = "#1B212F";
const LUMI_WHITE = "#FEFFFE";
const LUMI_SUBTEXT = "#5a6178";
const LUMI_GRADIENT_START = "#286C96";
const LUMI_GRADIENT_END = "#79BFE5";

export function Landing() {
    return (
        <div
            className="min-h-screen flex flex-col gap-[80px]"
            style={{ backgroundColor: LUMI_WHITE }}
        >
            {/* Block 1: Hero — уже сделан */}
            <section className="flex flex-col items-center pt-12 text-center">
                <h1
                    className="text-[28px] sm:text-[36px] font-medium leading-tight  sm:max-w-[420px]"
                    style={{ color: LUMI_BLACK }}
                >
                    Подберем уходовую
                    <br />
                    косметику, подходящую
                    <br />
                    тебе до 100%
                </h1>
                <p
                    className="mt-4 text-[14px] sm:text-lg  leading-snug"
                    style={{ color: LUMI_SUBTEXT }}
                >
                    Ответь на вопросы и получи список самых
                    <br />
                    подходящих средств
                </p>
                <Image
                    src={headerBg}
                    alt=""
                    className="w-full h-auto object-cover rounded-3xl"
                    priority
                />
                <Button
                    className="mt-4 w-full max-w-[320px] mx-auto font-medium text-base rounded-2xl min-h-14"
                    style={{
                        backgroundColor: LUMI_BLACK,
                        color: LUMI_WHITE,
                    }}
                >
                    Попробовать бесплатно
                </Button>
            </section>

            {/* Block 6: Засиять с Lumi — кнопка абсолютом на фото, без отступов от экрана */}
            <section className="w-full flex flex-col items-center gap-4 px-0 mx-auto text-center max-w-[320px]">
                <h2
                    className="text-[28px] sm:text-[32px] font-medium leading-tight"
                    style={{ color: LUMI_BLACK }}
                >
                    Это lumi — твой личный
                    <br />
                    косметолог
                </h2>
                <p
                    className="mt-4 text-[14px] sm:text-base leading-snug font-normal"
                    style={{ color: LUMI_SUBTEXT }}
                >
                    Мы хотим помочь девушкам перестать тратиться на ненужные
                    продукты, а покупать только самое необходимое и полезное для
                    вашей кожи
                </p>
                <div className="relative w-full max-w-[305px] mx-auto rounded-b-3xl mt-4 overflow-hidden">
                    <Image
                        src={serumCream}
                        alt=""
                        className="w-full h-auto object-cover block"
                        width={305}
                    />
                </div>
                <Button
                    className="mt-6 w-full  font-bold text-base rounded-2xl min-h-14"
                    style={{
                        backgroundColor: LUMI_BLACK,
                        color: LUMI_WHITE,
                    }}
                >
                    Подобрать уход
                </Button>
            </section>

            {/* Block 3: Это для тебя, если — без карточек, иконка + текст */}
            <section className="flex max-w-[320px] mx-auto flex-col items-center">
                <h2
                    className="text-[26px] sm:text-[28px] font-medium text-center"
                    style={{ color: LUMI_BLACK }}
                >
                    Это для тебя, если:
                </h2>
                <p
                    className="mt-2 text-[14px] text-center "
                    style={{ color: LUMI_SUBTEXT, opacity: 0.5 }}
                >
                    Если узнала тут себя — попробуй Lumi
                </p>
                <div className="mt-8 w-full flex flex-col gap-[16px] space-y-0">
                    <div className="flex items-center">
                        <Image
                            src={forYou1}
                            alt=""
                            className="flex-shrink-0 w-[80px] h-[80px] object-contain"
                            width={44}
                            height={44}
                        />
                        <p
                            className="text-[15px] leading-snug pt-0.5 font-normal"
                            style={{ color: LUMI_BLACK }}
                        >
                            Не разбираешься в активных компонентах косметики и
                            как они влияют на кожу
                        </p>
                    </div>
                    <div className="flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/for-you-gap-1.svg"
                            alt=""
                            className="w-[147px] h-6 object-contain"
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image
                            src={forYou2}
                            alt=""
                            className="flex-shrink-0 w-[80px] h-[80px] object-contain"
                            width={44}
                            height={44}
                        />
                        <p
                            className="text-[15px] leading-snug pt-0.5 font-normal"
                            style={{ color: LUMI_BLACK }}
                        >
                            Покупаешь косметику по советам блогеров полностью не
                            изучая состав продукта
                        </p>
                    </div>
                    <div className="flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/for-you-gap-2.svg"
                            alt=""
                            className="w-[145px] h-6 object-contain"
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image
                            src={forYou3}
                            alt=""
                            className="flex-shrink-0 w-[80px] h-[80px] object-contain"
                            width={44}
                            height={44}
                        />
                        <p
                            className="text-[15px] leading-snug pt-0.5 font-normal"
                            style={{ color: LUMI_BLACK }}
                        >
                            Не знаешь какие средства из твоей косметички
                            конфликтуют друг с другом
                        </p>
                    </div>
                </div>
            </section>

            {/* Block 3: Это lumi — твой личный косметолог (только how-we-help) */}
            <section className="relative flex flex-col items-center text-center">
                <Image
                    src={howWeHelpImg}
                    alt=""
                    className="mt-6 w-full h-auto object-contain rounded-2xl"
                />
                <div className="absolute top-[40px] left-0 right-0 pt-10 pb-4 px-6 text-center flex-shrink-0">
                    <h2
                        className="text-[26px] sm:text-[30px] font-medium"
                        style={{ color: LUMI_WHITE }}
                    >
                        Как мы поможем?
                    </h2>
                    <p
                        className="mt-3 text-[14px] leading-snug max-w-[320px] mx-auto font-normal"
                        style={{ color: LUMI_WHITE, opacity: 0.5 }}
                    >
                        Подбор косметики осуществляется на основе научных данных
                        о компонентах и их влияние на разные типы кожи
                    </p>
                </div>
                <Button
                    className="mt-4 w-full max-w-[320px] mx-auto font-medium text-base rounded-2xl min-h-14"
                    style={{
                        backgroundColor: LUMI_BLACK,
                        color: LUMI_WHITE,
                    }}
                >
                    Попробовать бесплатно
                </Button>
            </section>

            {/* Block 5: Те, кто уже попробовал — карточка как в дизайне */}
            <section className="flex flex-col items-center mx-auto max-w-[320px]">
                <Image
                    src={girlsImg}
                    alt=""
                    className="w-[190px] h-auto object-contain"
                    width={190}
                />
                <h2
                    className="mt-5 text-[26px] sm:text-[28px] font-medium text-center"
                    style={{ color: LUMI_BLACK }}
                >
                    Те, кто уже попробовал
                </h2>
                <p
                    className="mt-1.5 text-[15px] text-center font-normal"
                    style={{ color: LUMI_SUBTEXT }}
                >
                    Отзывы наших подруг
                </p>
                <div className="mt-6 w-full rounded-[28px] bg-[rgba(247,246,249,0.5)] p-[24px] sm:p-7">
                    <p
                        className="text-[15px] leading-snug font-normal"
                        style={{ color: LUMI_BLACK }}
                    >
                        Банальные, но неопровержимые выводы, а также диаграммы
                        связей освещают чрезвычайно интересные особенности
                        картины в целом, однако конкретные выводы, разумеется,
                        ассоциативно распределены по отраслям!
                    </p>
                    <div className="flex items-center gap-3 mt-[180px]">
                        <Image
                            src={arinaImg}
                            alt="Арина"
                            className="rounded-full w-10 h-10 object-cover flex-shrink-0"
                            width={40}
                            height={40}
                        />
                        <span
                            className="text-[15px] font-normal"
                            style={{ color: LUMI_BLACK }}
                        >
                            Арина
                        </span>
                    </div>
                </div>
                <Button
                    className="mt-6 w-full  font-normal text-base rounded-2xl min-h-14"
                    style={{
                        backgroundColor: LUMI_BLACK,
                        color: LUMI_WHITE,
                    }}
                >
                    Присоединиться бесплатно
                </Button>
            </section>

            {/* Block 4: Как мы поможем? — bottom-bg.png, текст и кнопка абсолютом на фото */}
            <section className="w-full pt-4 pb-0 px-0">
                <div className="relative w-full aspect-[1/2] mx-auto rounded-3xl overflow-hidden">
                    <Image
                        src={bottomBg}
                        alt=""
                        fill
                        className="object-cover object-top"
                    />
                    <div className="flex absolute bottom-[35px] left-0 right-0 justify-center px-4">
                        <Button
                            className="w-full max-w-[320px] font-semibold text-base rounded-2xl min-h-14 shadow-md"
                            style={{
                                backgroundColor: LUMI_WHITE,
                                color: LUMI_BLACK,
                            }}
                        >
                            Засиять с Lumi
                        </Button>
                    </div>
                </div>
            </section>

            {/* Block 7: Footer — градиент, кнопки, логотип */}
            <section className="mt-0 flex flex-col items-center">
                <div
                    style={{
                        background: `linear-gradient(180deg, ${LUMI_GRADIENT_START} 0%, ${LUMI_GRADIENT_END} 100%)`,
                    }}
                    className="w-full p-[40px] rounded-3xl flex flex-col gap-3"
                >
                    <Button
                        className="w-full font-semibold text-[16px] rounded-2xl min-h-14"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.25)",
                            color: LUMI_WHITE,
                            border: "1px solid rgba(255, 255, 255, 0.55)",
                        }}
                    >
                        Тех. поддержка
                    </Button>
                    <Button
                        className="w-full font-semibold text-[16px] rounded-2xl min-h-14"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.25)",
                            color: LUMI_WHITE,
                            border: "1px solid rgba(255, 255, 255, 0.55)",
                        }}
                    >
                        Связаться с командой
                    </Button>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/bottom-lumi.svg"
                    alt="LUMI"
                    className="p-[40px] w-full h-auto object-contain"
                />
            </section>
        </div>
    );
}
