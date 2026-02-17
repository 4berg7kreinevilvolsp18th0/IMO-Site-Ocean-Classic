import Link from 'next/link';
import Image from 'next/image';
import { DIRECTIONS } from '@/lib/directions';
import { getAccentColor } from '@/lib/utils';
import info from '@/content/info.json';
import newsData from '@/content/news.json';
import SocialCard, { VkIcon, TgIcon } from '@/components/SocialCard';
import {
  AngularDivider,
  NeonGrid,
  GlitchLine,
  DotMatrix,
  HexagonDecor,
  ScanlineOverlay,
} from '@/components/OceanDecorations';
import {
  VideoBackground,
  SunEffect,
  RainEffect,
  UnderwaterCaustics,
  FishSchool,
  FishPair,
  SoloFish,
  JellyfishFloat,
  AnimatedWaveDivider,
  OceanZoneGlow,
  EnhancedBubbles,
  Plankton,
  SeaweedAnimation,
} from '@/components/OceanEffects';

export default function Home() {
  const latestNews = newsData.slice(0, 3);

  return (
    <main className="min-h-screen bg-imo-deep text-white font-body overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 1 — HERO (Зона: Поверхность океана)
          Видео океанской поверхности + солнце + лёгкий дождь
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Видео-фон поверхности океана */}
        <VideoBackground
          src="/videos/ocean-surface.mp4"
          fallbackGradient="from-[#020a18] via-[#071e3d] to-imo-ocean"
          overlay="bg-gradient-to-b from-black/30 via-black/40 to-imo-deep/80"
        />

        {/* Зонная подсветка — поверхность */}
        <OceanZoneGlow zone="surface" />

        {/* Солнце с лучами */}
        <SunEffect className="top-[-20px] right-[10%] z-[2]" />

        {/* Лёгкий дождь */}
        <RainEffect intensity={25} className="z-[3] opacity-40" />

        {/* Декорации */}
        <NeonGrid />
        <EnhancedBubbles count={12} />

        {/* Косяк мелких рыб на заднем плане */}
        <FishSchool
          count={15}
          direction="left"
          speed={40}
          yPosition="65%"
          fishType="tropical"
          colorScheme="cyan"
        />

        {/* Пара рыб-клоунов */}
        <FishPair
          fishType="clownfish"
          direction="right"
          speed={50}
          yPosition="75%"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          {/* Логотип */}
          <div className="flex justify-center mb-8 animate-fade-in-down">
            <div className="border-2 border-imo-neon/30 p-3 shadow-brutal backdrop-blur-sm bg-white/5">
              <Image
                src="/sslogo.png"
                alt="Логотип Студенческого совета ИМО"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-20 sm:h-20"
                priority
              />
            </div>
          </div>

          {/* Тэглайн */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading tracking-wider mb-6 leading-[1.1] animate-fade-in-down">
            <span className="block text-white drop-shadow-lg">{info.hero.tagline.split(' в ')[0]}</span>
            <span
              className="block text-imo-neon neon-glow glitch-text"
              data-text="в главном восточном"
            >
              в главном восточном
            </span>
            <span className="block text-white drop-shadow-lg">вузе страны</span>
          </h1>

          <p className="text-imo-neon/50 font-heading tracking-[0.3em] text-xs sm:text-sm mb-6 animate-fade-in-up delay-200">
            {info.hero.subtitle}
          </p>

          <p className="text-base sm:text-lg max-w-3xl mx-auto text-white/70 mb-10 leading-relaxed animate-fade-in-up delay-300 font-light drop-shadow-md">
            {info.hero.description}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
            <a
              href={info.links.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-imo-coral text-white border-2 border-imo-coral shadow-lg shadow-imo-coral/20"
            >
              Поступить
            </a>
            <a
              href={info.links.official_site}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-white backdrop-blur-sm"
            >
              ocean.study &rarr;
            </a>
          </div>
        </div>

        {/* Анимированный волновой разделитель */}
        <AnimatedWaveDivider colorFrom="#0A1628" colorTo="#0C2340" />
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 2 — «В ИМО ТЫ СМОЖЕШЬ» (Зона: Мелководье)
          Каустики + мелкие рыбки + тёплые тона
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-imo-deep overflow-hidden">
        <OceanZoneGlow zone="shallow" />
        <UnderwaterCaustics />
        <Plankton count={20} />
        <DotMatrix className="top-10 right-20" />

        {/* Косяк синих тангов */}
        <FishSchool
          count={10}
          direction="right"
          speed={45}
          yPosition="20%"
          fishType="bluetang"
          colorScheme="blue"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-4">
              В Институте Мирового <br className="hidden sm:block" />океана ты сможешь
            </h2>
            <div className="w-16 h-[3px] bg-imo-neon mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {info.features.map((feature) => (
              <div
                key={feature.title}
                className="brutal-card p-6 text-center group backdrop-blur-sm"
              >
                <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                  {feature.icon}
                </span>
                <span className="text-sm sm:text-base font-medium text-imo-foam/90">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        <SeaweedAnimation count={6} />
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 3 — ПРОГРАММЫ БАКАЛАВРИАТА (Зона: Средний океан)
          Медузы + одинокая рыба-ангел + голубые тона
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-imo-deep via-[#0a1e3d] to-imo-deep" />
        <OceanZoneGlow zone="midocean" />
        <EnhancedBubbles count={10} />

        {/* Медузы */}
        <JellyfishFloat count={3} colorScheme="cyan" />

        {/* Одинокая рыба-ангел */}
        <SoloFish type="angelfish" direction="left" speed={55} yPosition="35%" />

        {/* Косяк тропических рыб */}
        <FishSchool
          count={8}
          direction="left"
          speed={38}
          yPosition="70%"
          fishType="tropical"
          colorScheme="green"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-12">
            <div>
              <p className="text-imo-neon font-heading tracking-[0.2em] text-xs mb-2">ОБРАЗОВАНИЕ</p>
              <h2 className="section-title text-3xl sm:text-4xl text-white">Бакалавриат</h2>
              <div className="w-12 h-[3px] bg-imo-neon mt-3" />
            </div>
            <Link
              href="/programs"
              className="text-sm text-imo-neon hover:text-imo-lime transition-colors font-heading tracking-wider"
            >
              ВСЕ ПРОГРАММЫ &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIRECTIONS.map((d) => (
              <div
                key={d.slug}
                className="program-card p-6 backdrop-blur-sm"
                style={{ '--accent-color': getAccentColor(d.slug) } as React.CSSProperties}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{d.icon}</span>
                  <div>
                    <h3 className="text-base font-medium leading-snug text-white font-body">
                      {d.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed font-light">{d.description}</p>
              </div>
            ))}
            {/* Водные биоресурсы */}
            <div
              className="program-card p-6 backdrop-blur-sm"
              style={{ '--accent-color': '#00897B' } as React.CSSProperties}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">🐟</span>
                <h3 className="text-base font-medium leading-snug text-white font-body">
                  Водные биоресурсы и аквакультура
                </h3>
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Управление рыбохозяйством, марикультура, экологический мониторинг водных объектов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 4 — ЭКСПЕДИЦИИ (Зона: Открытый океан)
          Видео-фон + дождь + кит на фоне + волны
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Видео подводного мира */}
        <VideoBackground
          src="/videos/underwater-reef.mp4"
          fallbackGradient="from-imo-navy via-imo-ocean to-imo-wave"
          overlay="bg-gradient-to-r from-imo-navy/70 via-imo-ocean/50 to-imo-wave/60"
        />

        <AnimatedWaveDivider colorFrom="#0A1628" colorTo="#0C2340" position="top" />

        {/* Дождь */}
        <RainEffect intensity={35} className="z-[3] opacity-30" />

        {/* Кит на фоне */}
        <SoloFish type="whale" direction="left" speed={90} yPosition="60%" />

        {/* Пара тропических рыб */}
        <FishPair fishType="tropical" direction="right" speed={55} yPosition="40%" />

        <EnhancedBubbles count={8} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-imo-neon/60 font-heading tracking-[0.2em] text-xs mb-3">ПЛАВУЧИЙ УНИВЕРСИТЕТ</p>
              <h2 className="section-title text-3xl sm:text-4xl text-white mb-6 drop-shadow-lg">
                {info.expeditions.title}
              </h2>
              <p className="section-subtitle text-white/80 mb-6 leading-relaxed drop-shadow-md">
                {info.expeditions.description}
              </p>
              <a
                href={info.expeditions.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-white border-white/40 backdrop-blur-sm"
                aria-label="Смотреть видео об экспедициях (откроется в новом окне)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Смотреть видео
              </a>
            </div>
            <div className="relative">
              <div className="brutal-card p-8 text-center brutal-border-neon backdrop-blur-sm">
                <div className="text-6xl mb-4" aria-hidden="true">🚢</div>
                <h3 className="font-heading text-xl tracking-wider text-imo-neon neon-glow mb-3">НИС ДВФУ</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Научно-исследовательские суда — ваш класс в открытом океане. Сбор проб,
                  анализ экосистем и работа бок о бок с международными учёными.
                </p>
              </div>
              <GlitchLine className="top-4 -right-10" />
            </div>
          </div>
        </div>

        <AnimatedWaveDivider colorFrom="#0A1628" colorTo="#0A1628" />
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 5 — ПРАКТИКИ И СТАЖИРОВКИ (Зона: Глубина)
          Скат + биолюминесценция + тёмные тона
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-28 bg-imo-deep overflow-hidden">
        <OceanZoneGlow zone="deep" />
        <Plankton count={40} />

        {/* Скат манта */}
        <SoloFish type="manta" direction="left" speed={70} yPosition="25%" />

        {/* Медузы глубоководные */}
        <JellyfishFloat count={2} colorScheme="purple" />

        {/* Одинокий синий танг */}
        <FishSchool
          count={6}
          direction="right"
          speed={50}
          yPosition="75%"
          fishType="bluetang"
          colorScheme="blue"
        />

        <DotMatrix className="bottom-10 left-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-imo-neon font-heading tracking-[0.2em] text-xs mb-2">ОПЫТ</p>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-4">
              {info.practices.title}
            </h2>
            <div className="w-16 h-[3px] bg-imo-neon mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="brutal-card p-8 brutal-border-neon backdrop-blur-sm">
              <div className="text-3xl mb-4" aria-hidden="true">🔬</div>
              <h3 className="font-heading text-lg tracking-wider text-white mb-3">ПОЛЕВЫЕ ПРАКТИКИ</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {info.practices.description}
              </p>
            </div>
            <div className="brutal-card p-8 backdrop-blur-sm">
              <div className="text-3xl mb-4" aria-hidden="true">✈️</div>
              <h3 className="font-heading text-lg tracking-wider text-white mb-3">МЕЖДУНАРОДНЫЕ СТАЖИРОВКИ</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {info.practices.international}
              </p>
            </div>
          </div>
        </div>

        <SeaweedAnimation count={4} />
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 6 — КАМПУС (Зона: Коралловый риф)
          Видео рифа + рыбы-клоуны + тёплые кораллы
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-imo-deep via-[#0d1f38] to-imo-deep" />
        <OceanZoneGlow zone="shallow" />
        <UnderwaterCaustics />
        <HexagonDecor className="top-10 left-10" />

        {/* Пара рыб-клоунов */}
        <FishPair fishType="clownfish" direction="left" speed={40} yPosition="20%" />

        {/* Косяк тёплых рыб */}
        <FishSchool
          count={12}
          direction="right"
          speed={42}
          yPosition="80%"
          fishType="tropical"
          colorScheme="warm"
        />

        {/* Черепаха */}
        <SoloFish type="turtle" direction="right" speed={65} yPosition="55%" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Карточка с фактами */}
            <div>
              <p className="text-imo-coral font-heading tracking-[0.2em] text-xs mb-2">ОСТРОВ РУССКИЙ</p>
              <h2 className="section-title text-3xl sm:text-4xl text-white mb-6">
                {info.campus.title}
              </h2>
              <ul className="space-y-4">
                {info.campus.facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3 text-white/80 font-light">
                    <span className="text-imo-neon mt-0.5 text-lg flex-shrink-0" aria-hidden="true">&#x25B8;</span>
                    <span className="text-sm leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Статистика */}
            <div className="brutal-card p-8 text-center brutal-border-neon backdrop-blur-sm">
              <div className="text-5xl mb-4" aria-hidden="true">🏛️</div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center border-2 border-white/5 p-4 hover:border-imo-neon/20 transition-colors">
                  <div className="text-2xl font-heading text-imo-neon neon-glow">10 000+</div>
                  <div className="text-xs text-white/50 mt-1">мест в общежитиях</div>
                </div>
                <div className="text-center border-2 border-white/5 p-4 hover:border-imo-neon/20 transition-colors">
                  <div className="text-2xl font-heading text-imo-neon neon-glow">200</div>
                  <div className="text-xs text-white/50 mt-1">гектаров кампуса</div>
                </div>
                <div className="text-center border-2 border-white/5 p-4 hover:border-imo-neon/20 transition-colors">
                  <div className="text-2xl font-heading text-imo-neon neon-glow">8</div>
                  <div className="text-xs text-white/50 mt-1">учебных корпусов</div>
                </div>
                <div className="text-center border-2 border-white/5 p-4 hover:border-imo-coral/20 transition-colors">
                  <div className="text-2xl font-heading text-imo-coral">2 860 &#x20BD;</div>
                  <div className="text-xs text-white/50 mt-1">проживание / мес.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SeaweedAnimation count={5} />
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 7 — СТИПЕНДИИ (Зона: Средняя глубина)
          Планктон + мягкое свечение
          ═══════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-imo-deep overflow-hidden">
        <OceanZoneGlow zone="midocean" />
        <Plankton count={25} />

        {/* Медузы */}
        <JellyfishFloat count={2} colorScheme="pink" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="brutal-card p-8 sm:p-10 relative overflow-hidden brutal-border-neon backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-imo-neon via-imo-sky to-imo-magenta" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-imo-neon font-heading tracking-[0.2em] text-xs mb-2">ПОДДЕРЖКА</p>
                <h2 className="section-title text-2xl sm:text-3xl text-white mb-4">
                  {info.stipends.title}
                </h2>
                <ul className="space-y-3">
                  {info.stipends.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3 text-white/80 font-light">
                      <span className="text-imo-coral mt-0.5" aria-hidden="true">&#x25A0;</span>
                      <span className="text-sm leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block">
                  <div className="text-5xl sm:text-6xl font-heading text-imo-neon neon-glow neon-glow-pulse">
                    30 000 &#x20BD;
                  </div>
                  <div className="text-sm text-white/50 mt-2 font-light">максимальная партнёрская стипендия</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 8 — НОВОСТИ (Зона: Течения)
          Черепаха + мелкие косяки
          ═══════════════════════════════════════════ */}
      {latestNews.length > 0 && (
        <section className="relative py-20 sm:py-28 bg-imo-deep overflow-hidden">
          <OceanZoneGlow zone="shallow" />
          <UnderwaterCaustics className="opacity-50" />

          {/* Черепаха */}
          <SoloFish type="turtle" direction="left" speed={80} yPosition="15%" />

          {/* Косяк зелёных рыб */}
          <FishSchool
            count={9}
            direction="right"
            speed={35}
            yPosition="85%"
            fishType="tropical"
            colorScheme="green"
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-12">
              <div>
                <p className="text-imo-neon font-heading tracking-[0.2em] text-xs mb-2">АКТУАЛЬНО</p>
                <h2 className="section-title text-3xl sm:text-4xl text-white">Новости</h2>
                <div className="w-12 h-[3px] bg-imo-neon mt-3" />
              </div>
              <Link
                href="/news"
                className="text-sm text-imo-neon hover:text-imo-lime transition-colors font-heading tracking-wider"
              >
                ВСЕ НОВОСТИ &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latestNews.map((item) => (
                <article key={item.id} className="brutal-card p-6 group backdrop-blur-sm">
                  <time className="text-xs text-imo-neon/50 font-body" dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                  <h3 className="text-base font-medium mt-2 mb-2 leading-snug text-white group-hover:text-imo-neon transition-colors font-body">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">{item.intro}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 8.5 — ДЛЯ СТУДЕНТОВ (Зона: Рифы)
          Пузырьки + пара рыб-ангелов
          ═══════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-imo-deep overflow-hidden">
        <OceanZoneGlow zone="shallow" />
        <EnhancedBubbles count={10} />
        <DotMatrix className="top-4 left-10" />
        <HexagonDecor className="bottom-4 right-10" />

        {/* Пара рыб-ангелов */}
        <FishPair fishType="angelfish" direction="left" speed={50} yPosition="30%" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="brutal-card p-8 sm:p-10 brutal-border-neon relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-imo-neon via-imo-lime to-imo-sky" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-imo-lime font-heading tracking-[0.2em] text-xs mb-2">УЖЕ УЧИШЬСЯ В ИМО?</p>
                <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-white mb-4">
                  ВСЁ ДЛЯ СТУДЕНТОВ
                </h2>
                <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
                  Быстрый доступ к LMS, расписанию, библиотеке и другим сервисам.
                  Гайды по общежитию, стипендиям, документам и советы первокурсникам.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/for-students" className="btn-primary bg-imo-neon text-imo-deep border-2 border-imo-neon text-xs">
                    ПОЛЕЗНЫЕ ССЫЛКИ
                  </Link>
                  <Link href="/guides" className="btn-outline text-imo-neon border-imo-neon/40 text-xs">
                    ГАЙДЫ СТУДЕНТА →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border-2 border-white/5 p-4 text-center hover:border-imo-neon/20 transition-colors">
                  <div className="text-2xl mb-2" aria-hidden="true">📚</div>
                  <div className="text-xs text-white/50">LMS и учёба</div>
                </div>
                <div className="border-2 border-white/5 p-4 text-center hover:border-imo-neon/20 transition-colors">
                  <div className="text-2xl mb-2" aria-hidden="true">🏠</div>
                  <div className="text-xs text-white/50">Общежитие</div>
                </div>
                <div className="border-2 border-white/5 p-4 text-center hover:border-imo-neon/20 transition-colors">
                  <div className="text-2xl mb-2" aria-hidden="true">💰</div>
                  <div className="text-xs text-white/50">Стипендии</div>
                </div>
                <div className="border-2 border-white/5 p-4 text-center hover:border-imo-neon/20 transition-colors">
                  <div className="text-2xl mb-2" aria-hidden="true">🎓</div>
                  <div className="text-xs text-white/50">Первокурсникам</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 9 — СОЦСЕТИ (Зона: Бездна)
          Биолюминесценция + редкие существа
          ═══════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 bg-imo-deep overflow-hidden">
        <OceanZoneGlow zone="abyss" />
        <Plankton count={35} />

        {/* Медузы глубоководные */}
        <JellyfishFloat count={2} colorScheme="purple" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title text-2xl sm:text-3xl text-white mb-4">
              Ресурсы и соцсети
            </h2>
            <p className="section-subtitle text-white/50 max-w-xl mx-auto text-sm">
              Следите за новостями школы и студенческого совета ИМО
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SocialCard
              href={info.links.vk_school}
              title="ВКонтакте школы"
              desc="Новости и объявления"
              icon={<VkIcon />}
              color="bg-[#4C75A3]"
            />
            <SocialCard
              href={info.links.telegram_school}
              title="Telegram школы"
              desc="Оперативная информация"
              icon={<TgIcon />}
              color="bg-[#2AABEE]"
            />
            <SocialCard
              href={info.links.vk_student_council}
              title="ВК студсовета"
              desc="Мероприятия и активности"
              icon={<VkIcon />}
              color="bg-[#4C75A3]"
            />
            <SocialCard
              href={info.links.telegram_student_council}
              title="Telegram студсовета"
              desc="Чат и новости"
              icon={<TgIcon />}
              color="bg-[#2AABEE]"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          СЕКЦИЯ 10 — CTA «ПОСТУПИТЬ» (Зона: Всплытие на поверхность)
          Видео-фон + солнечные лучи + все рыбы
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Видео океана */}
        <VideoBackground
          src="/videos/ocean-aerial.mp4"
          fallbackGradient="from-imo-ocean via-imo-wave to-imo-sky"
          overlay="bg-gradient-to-t from-imo-deep/60 via-imo-ocean/40 to-transparent"
        />

        <AnimatedWaveDivider colorFrom="#0A1628" colorTo="#0C2340" position="top" />

        {/* Солнечные лучи сверху */}
        <SunEffect className="top-[-30px] left-[20%] z-[2] opacity-60" />

        {/* Рыбы повсюду! */}
        <FishSchool count={14} direction="left" speed={30} yPosition="30%" fishType="tropical" colorScheme="cyan" />
        <FishSchool count={8} direction="right" speed={45} yPosition="60%" fishType="bluetang" colorScheme="blue" />
        <FishPair fishType="clownfish" direction="left" speed={55} yPosition="45%" />
        <SoloFish type="whale" direction="right" speed={100} yPosition="70%" />

        <EnhancedBubbles count={15} />
        <Plankton count={20} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
          <div className="border-2 border-white/20 p-3 inline-block mb-6 backdrop-blur-sm bg-white/5">
            <Image
              src="/sslogo.png"
              alt="Логотип Студенческого совета ИМО"
              width={60}
              height={60}
              className="w-14 h-14 opacity-80"
            />
          </div>
          <h2
            className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4 drop-shadow-lg"
          >
            Присоединяйся к ИМО
          </h2>
          <p className="section-subtitle text-white/80 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Кампус на острове Русский, море под окнами, морские экспедиции, стипендии до 30 000 &#x20BD;
            и стажировки в вузах Кореи, Японии и Китая.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={info.links.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-imo-navy border-2 border-white hover:bg-imo-neon hover:text-imo-deep hover:border-imo-neon shadow-lg"
            >
              Поступить в ИМО
            </a>
            <a
              href={info.links.official_site}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-white border-white/40 backdrop-blur-sm"
            >
              ocean.study &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
