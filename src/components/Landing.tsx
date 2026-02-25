"use client";

import { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { Button } from "@heroui/react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useInView,
} from "framer-motion";
import headerBg from "@/public/images/header-bg.webp";
import howWeHelpImg from "@/public/images/how-we-help.png";
import forYou1 from "@/public/images/for-you-1.png";
import forYou2 from "@/public/images/for-you-2.png";
import forYou3 from "@/public/images/for-you-3.png";
import girlsImg from "@/public/images/girls.png";
import arinaImg from "@/public/images/arina.png";
import serumCream from "@/public/images/serum-and-face-cream.webp";
import bottomBg from "@/public/images/bottom-bg.webp";
import bottomBgDesktop from "@/public/images/bottom-bg-desktop.webp";

const LUMI_BLACK = "#1B212F";
const LUMI_WHITE = "#FEFFFE";
const LUMI_SUBTEXT = "#5a6178";
const LUMI_GRADIENT_START = "#286C96";
const LUMI_GRADIENT_END = "#79BFE5";

// Плавные spring настройки для премиального ощущения
const smoothSpring = { stiffness: 100, damping: 30, restDelta: 0.001 };

// Компонент для анимации при появлении в viewport
function RevealSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

// Компонент для stagger анимации детей
function StaggerContainer({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.1,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// Анимированная карточка с hover эффектом
function AnimatedCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.4, 0.25, 1],
                    },
                },
            }}
            whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
        >
            {children}
        </motion.div>
    );
}

// Магнитная кнопка с премиальным hover эффектом
function MagneticButton({
    children,
    className = "",
    style = {},
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Button className={className} style={style}>
                {children}
            </Button>
        </motion.div>
    );
}

export function Landing() {
    const containerRef = useRef(null);
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Параллакс значения с плавным spring
    const heroImageY = useSpring(
        useTransform(scrollYProgress, [0, 0.3], [0, -50]),
        smoothSpring,
    );
    const heroTextY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0, -30]),
        smoothSpring,
    );

    return (
        <div
            ref={containerRef}
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: LUMI_WHITE }}
        >
            {/* Container wrapper для десктопа - изменено на 1200px */}
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Block 1: Hero */}
                <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-12 lg:pt-24 gap-8 lg:gap-16">
                    <motion.div
                        className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 lg:max-w-[550px]"
                        style={{ y: heroTextY }}
                    >
                        <motion.h1
                            className="text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[52px] font-medium leading-tight"
                            style={{ color: LUMI_BLACK }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            Подберем уходовую
                            <br />
                            косметику, подходящую
                            <br />
                            тебе до 100%
                        </motion.h1>
                        <motion.p
                            className="mt-4 lg:mt-6 text-[14px] sm:text-lg lg:text-xl xl:text-[22px] leading-snug"
                            style={{ color: LUMI_SUBTEXT }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            Ответь на вопросы и получи список самых
                            <br className="lg:hidden" />
                            подходящих средств
                        </motion.p>
                        <motion.div
                            className="mt-6 lg:mt-8 w-full max-w-[320px] lg:max-w-[360px]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                        >
                            <MagneticButton
                                className="w-full font-medium text-base lg:text-lg rounded-2xl min-h-14 lg:min-h-16"
                                style={{
                                    backgroundColor: LUMI_BLACK,
                                    color: LUMI_WHITE,
                                }}
                            >
                                Попробовать бесплатно
                            </MagneticButton>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="lg:flex-1 lg:max-w-[550px]"
                        style={{ y: heroImageY }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0.25, 0.4, 0.25, 1],
                        }}
                    >
                        <Image
                            src={headerBg}
                            alt=""
                            className="w-full h-auto object-cover rounded-3xl"
                            priority
                        />
                    </motion.div>
                </section>

                {/* Block 2: Это lumi — твой личный косметолог */}
                <RevealSection className="mt-[80px] lg:mt-[160px]">
                    <section className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-20 items-center gap-4 mx-auto text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start max-w-[320px] lg:max-w-[500px] lg:flex-1">
                            <h2
                                className="text-[28px] sm:text-[32px] lg:text-[44px] xl:text-[48px] font-medium leading-tight"
                                style={{ color: LUMI_BLACK }}
                            >
                                Это lumi — твой личный
                                <br />
                                косметолог
                            </h2>
                            <p
                                className="mt-4 lg:mt-6 text-[14px] sm:text-base lg:text-lg xl:text-xl leading-snug font-normal"
                                style={{ color: LUMI_SUBTEXT }}
                            >
                                Мы хотим помочь девушкам перестать тратиться на
                                ненужные продукты, а покупать только самое
                                необходимое и полезное для вашей кожи
                            </p>
                            <div className="mt-6 lg:mt-8 w-full max-w-[320px] lg:max-w-[360px] hidden lg:block">
                                <MagneticButton
                                    className="w-full font-bold text-base lg:text-lg rounded-2xl min-h-14 lg:min-h-16"
                                    style={{
                                        backgroundColor: LUMI_BLACK,
                                        color: LUMI_WHITE,
                                    }}
                                >
                                    Подобрать уход
                                </MagneticButton>
                            </div>
                        </div>

                        <motion.div
                            className="relative w-full max-w-[305px] lg:max-w-[500px] mx-auto lg:mx-0 rounded-b-3xl mt-4 lg:mt-0 overflow-hidden lg:flex-1"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Image
                                src={serumCream}
                                alt=""
                                className="w-full h-auto object-cover block"
                                width={500}
                            />
                        </motion.div>

                        <div className="mt-6 w-full max-w-[320px] lg:hidden">
                            <MagneticButton
                                className="w-full font-bold text-base rounded-2xl min-h-14"
                                style={{
                                    backgroundColor: LUMI_BLACK,
                                    color: LUMI_WHITE,
                                }}
                            >
                                Подобрать уход
                            </MagneticButton>
                        </div>
                    </section>
                </RevealSection>

                {/* Block 3: Это для тебя, если */}
                <RevealSection className="mt-[80px] lg:mt-[160px]">
                    <section className="flex flex-col items-center max-w-[320px] lg:max-w-full mx-auto">
                        <h2
                            className="text-[26px] sm:text-[28px] lg:text-[40px] xl:text-[44px] font-medium text-center"
                            style={{ color: LUMI_BLACK }}
                        >
                            Это для тебя, если:
                        </h2>
                        <p
                            className="mt-2 lg:mt-3 text-[14px] lg:text-base xl:text-lg text-center"
                            style={{ color: LUMI_SUBTEXT, opacity: 0.5 }}
                        >
                            Если узнала тут себя — попробуй Lumi
                        </p>

                        <StaggerContainer className="mt-8 lg:mt-14 w-full flex flex-col lg:flex-row lg:justify-center lg:gap-10 gap-[16px]">
                            {[
                                {
                                    img: forYou1,
                                    text: "Не разбираешься в активных компонентах косметики и как они влияют на кожу",
                                    gap: "/images/for-you-gap-1.svg",
                                },
                                {
                                    img: forYou2,
                                    text: "Покупаешь косметику по советам блогеров полностью не изучая состав продукта",
                                    gap: "/images/for-you-gap-2.svg",
                                },
                                {
                                    img: forYou3,
                                    text: "Не знаешь какие средства из твоей косметички конфликтуют друг с другом",
                                    gap: null,
                                },
                            ].map((item, index) => (
                                <div key={index} className="contents lg:block">
                                    <AnimatedCard className="flex lg:flex-col items-center lg:text-center lg:max-w-[320px] lg:p-8 lg:rounded-3xl lg:bg-[rgba(247,246,249,0.5)]">
                                        <Image
                                            src={item.img}
                                            alt=""
                                            className="flex-shrink-0 w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] object-contain"
                                            width={120}
                                            height={120}
                                        />
                                        <p
                                            className="text-[15px] lg:text-base xl:text-lg leading-snug pt-0.5 lg:pt-0 lg:mt-5 font-normal"
                                            style={{ color: LUMI_BLACK }}
                                        >
                                            {item.text}
                                        </p>
                                    </AnimatedCard>

                                    {item.gap && (
                                        <motion.div
                                            className="flex justify-center lg:hidden"
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    scaleX: 0,
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    scaleX: 1,
                                                    transition: {
                                                        duration: 0.5,
                                                    },
                                                },
                                            }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.gap}
                                                alt=""
                                                className="w-[147px] h-6 object-contain"
                                            />
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </StaggerContainer>
                    </section>
                </RevealSection>

                {/* Block 4: Как мы поможем? */}
                <RevealSection className="mt-[80px] lg:mt-[160px]">
                    <section className="relative flex flex-col lg:flex-row items-center text-center lg:text-left lg:gap-16">
                        <motion.div
                            className="lg:flex-1 lg:order-2 w-full lg:max-w-[580px]"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                src={howWeHelpImg}
                                alt=""
                                className="w-full h-auto object-contain rounded-2xl"
                            />
                        </motion.div>

                        <div className="lg:flex-1 lg:order-1 lg:max-w-[500px]">
                            {/* Mobile: absolute overlay */}
                            <div className="absolute lg:relative top-[40px] lg:top-0 left-0 right-0 pt-10 lg:pt-0 pb-4 px-6 lg:px-0 text-center lg:text-left flex-shrink-0">
                                <h2
                                    className="text-[26px] sm:text-[30px] lg:text-[40px] xl:text-[44px] font-medium"
                                    style={{ color: LUMI_WHITE }}
                                >
                                    <span className="lg:hidden">
                                        Как мы поможем?
                                    </span>
                                    <span
                                        className="hidden lg:inline"
                                        style={{ color: LUMI_BLACK }}
                                    >
                                        Как мы поможем?
                                    </span>
                                </h2>
                                <p
                                    className="mt-3 lg:mt-5 text-[14px] lg:text-base xl:text-lg leading-snug max-w-[320px] lg:max-w-none mx-auto lg:mx-0 font-normal"
                                    style={{ color: LUMI_WHITE, opacity: 0.5 }}
                                >
                                    <span className="lg:hidden">
                                        Подбор косметики осуществляется на
                                        основе научных данных о компонентах и их
                                        влияние на разные типы кожи
                                    </span>
                                    <span
                                        className="hidden lg:inline"
                                        style={{
                                            color: LUMI_SUBTEXT,
                                            opacity: 1,
                                        }}
                                    >
                                        Подбор косметики осуществляется на
                                        основе научных данных о компонентах и их
                                        влияние на разные типы кожи
                                    </span>
                                </p>
                            </div>

                            <div className="mt-4 lg:mt-10 w-full max-w-[320px] lg:max-w-[360px] mx-auto lg:mx-0">
                                <MagneticButton
                                    className="w-full font-medium text-base lg:text-lg rounded-2xl min-h-14 lg:min-h-16"
                                    style={{
                                        backgroundColor: LUMI_BLACK,
                                        color: LUMI_WHITE,
                                    }}
                                >
                                    Попробовать бесплатно
                                </MagneticButton>
                            </div>
                        </div>
                    </section>
                </RevealSection>

                {/* Block 5: Те, кто уже попробовал */}
                <RevealSection className="mt-[80px] lg:mt-[160px]">
                    <section className="flex flex-col items-center mx-auto max-w-[320px] lg:max-w-full">
                        <motion.div
                            whileHover={{ rotate: [0, -2, 2, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={girlsImg}
                                alt=""
                                className="w-[190px] lg:w-[280px] h-auto object-contain"
                                width={280}
                            />
                        </motion.div>
                        <h2
                            className="mt-5 lg:mt-6 text-[26px] sm:text-[28px] lg:text-[40px] xl:text-[44px] font-medium text-center"
                            style={{ color: LUMI_BLACK }}
                        >
                            Те, кто уже попробовал
                        </h2>
                        <p
                            className="mt-1.5 lg:mt-3 text-[15px] lg:text-base xl:text-lg text-center font-normal"
                            style={{ color: LUMI_SUBTEXT }}
                        >
                            Отзывы наших подруг
                        </p>

                        <StaggerContainer className="mt-6 lg:mt-12 w-full lg:grid lg:grid-cols-2 lg:gap-8">
                            {[1, 2].map((_, index) => (
                                <AnimatedCard
                                    key={index}
                                    className={`w-full rounded-[28px] lg:rounded-[32px] bg-[rgba(247,246,249,0.5)] p-[24px] sm:p-7 lg:p-10 ${
                                        index === 1 ? "hidden lg:block" : ""
                                    }`}
                                >
                                    <p
                                        className="text-[15px] lg:text-base xl:text-lg leading-snug font-normal"
                                        style={{ color: LUMI_BLACK }}
                                    >
                                        Банальные, но неопровержимые выводы, а
                                        также диаграммы связей освещают
                                        чрезвычайно интересные особенности
                                        картины в целом, однако конкретные
                                        выводы, разумеется, ассоциативно
                                        распределены по отраслям!
                                    </p>
                                    <div className="flex items-center gap-3 lg:gap-4 mt-6 lg:mt-10">
                                        <Image
                                            src={arinaImg}
                                            alt="Арина"
                                            className="rounded-full w-10 h-10 lg:w-14 lg:h-14 object-cover flex-shrink-0"
                                            width={56}
                                            height={56}
                                        />
                                        <span
                                            className="text-[15px] lg:text-base xl:text-lg font-normal"
                                            style={{ color: LUMI_BLACK }}
                                        >
                                            {index === 0 ? "Арина" : "Мария"}
                                        </span>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </StaggerContainer>

                        <div className="mt-6 lg:mt-12 w-full max-w-[320px] lg:max-w-[360px]">
                            <MagneticButton
                                className="w-full font-normal text-base lg:text-lg rounded-2xl min-h-14 lg:min-h-16"
                                style={{
                                    backgroundColor: LUMI_BLACK,
                                    color: LUMI_WHITE,
                                }}
                            >
                                Присоединиться бесплатно
                            </MagneticButton>
                        </div>
                    </section>
                </RevealSection>

                {/* Block 6: Bottom CTA с фото */}
                <RevealSection className="mt-[80px] lg:mt-[140px]">
                    <section className="w-full pt-4 pb-0">
                        <motion.div
                            className="relative w-full aspect-[1/2] lg:aspect-[2/1] mx-auto rounded-3xl overflow-hidden"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                src={isDesktop ? bottomBgDesktop : bottomBg}
                                alt=""
                                fill
                                className="object-cover object-top lg:object-center"
                            />
                            <motion.div
                                className="flex absolute bottom-[35px] lg:bottom-[50px] left-0 right-0 justify-center px-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <MagneticButton
                                    className="w-full max-w-[320px] font-semibold text-base rounded-2xl min-h-14 shadow-md"
                                    style={{
                                        backgroundColor: LUMI_WHITE,
                                        color: LUMI_BLACK,
                                    }}
                                >
                                    Засиять с Lumi
                                </MagneticButton>
                            </motion.div>
                        </motion.div>
                    </section>
                </RevealSection>

                {/* Block 7: Footer */}
                <RevealSection className="mt-[80px] lg:mt-[120px] mb-8 lg:mb-16">
                    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between items-center gap-8 lg:gap-12">
                        <motion.div
                            style={{
                                background: `linear-gradient(180deg, ${LUMI_GRADIENT_START} 0%, ${LUMI_GRADIENT_END} 100%)`,
                            }}
                            className="w-full lg:max-w-[480px] p-[40px] lg:p-[50px] rounded-3xl lg:rounded-[36px] flex flex-col gap-3 lg:gap-4"
                            whileHover={{
                                boxShadow:
                                    "0 20px 40px rgba(40, 108, 150, 0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <MagneticButton
                                className="w-full font-semibold text-[16px] lg:text-lg rounded-2xl min-h-14 lg:min-h-16"
                                style={{
                                    backgroundColor:
                                        "rgba(255, 255, 255, 0.25)",
                                    color: LUMI_WHITE,
                                    border: "1px solid rgba(255, 255, 255, 0.55)",
                                }}
                            >
                                Тех. поддержка
                            </MagneticButton>
                            <MagneticButton
                                className="w-full font-semibold text-[16px] lg:text-lg rounded-2xl min-h-14 lg:min-h-16"
                                style={{
                                    backgroundColor:
                                        "rgba(255, 255, 255, 0.25)",
                                    color: LUMI_WHITE,
                                    border: "1px solid rgba(255, 255, 255, 0.55)",
                                }}
                            >
                                Связаться с командой
                            </MagneticButton>
                        </motion.div>

                        <motion.div
                            className="lg:flex-1 flex justify-center lg:justify-end"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/bottom-lumi.svg"
                                alt="LUMI"
                                className="p-[40px] lg:p-0 w-full max-w-[300px] lg:max-w-[500px] h-auto object-contain"
                            />
                        </motion.div>
                    </section>
                </RevealSection>
            </div>
        </div>
    );
}
