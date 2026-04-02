import type { Metadata } from "next";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { PageSectionNav } from "@/components/page-section-nav";
import { SectionTitle } from "@/components/section-title";
import { pageSections } from "@/data/page-sections";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "ROADMAP – AIR FORCE STRIKE (AFS) outlines the foundation, core gameplay, upgrade systems, economy, marketplace, and expansion plan.",
};

type RoadmapPhase = {
  id: string;
  phase: string;
  title: string;
  summary: string;
  items: string[];
};

const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Foundation",
    summary: "วางระบบเกมหลักให้เล่นได้จริง",
    items: [
      "ระบบสมัคร / เชื่อม World App",
      "ระบบล็อกอินผู้เล่น",
      "โครงสร้างข้อมูลเครื่องบิน / เลเวล / แผนที่ / มิชชั่น",
      "ออกแบบ UI หลักของเกมให้พร้อมใช้งาน",
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Core Gameplay",
    summary: "สร้างแกนการเล่นหลักให้ครบ",
    items: [
      "ระบบสะสมเครื่องบิน",
      "ระบบแบ่งระดับเครื่องบิน",
      "Free / Common / Rare / Epic / Legendary / Special",
      "ระบบค่า ATK / เลเวล / จำนวนรอบต่อวัน",
      "ระบบด่าน Mission Map",
      "ระบบต่อสู้กำจัดศัตรูในแต่ละรอบ",
      "ระบบคำนวณรางวัลตามผลงานในด่าน",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Upgrade System",
    summary: "ทำให้การอัปเกรดมีความหมายต่อการเล่น",
    items: [
      "ระบบอัปเลเวลเครื่องบิน",
      "ระบบใช้เหรียญในเกมเพื่ออัปเกรด",
      "ระบบเพิ่มพลังโจมตีตามเลเวล",
      "ระบบปลดล็อกศักยภาพเครื่องบินแต่ละระดับ",
      "ระบบแสดงต้นทุนอัปเกรดแบบชัดเจน",
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Reward Economy",
    summary: "ออกแบบเศรษฐกิจรางวัลให้สมดุลและน่าเล่น",
    items: [
      "ระบบเหรียญ AFS ภายในเกม",
      "ระบบรับรางวัลจากการเล่นแต่ละรอบ",
      "ระบบคำนวณผลตอบแทนจาก performance จริง",
      "ระบบแยกความแตกต่างของเครื่องบินแต่ละแบบ",
      "ปรับสมดุลรายรับให้แต่ละคลาสมีจุดเด่นต่างกัน",
    ],
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    title: "Box & Aircraft Collection",
    summary: "ขยายระบบกล่องสุ่มและการสะสมฝูงบิน",
    items: [
      "ระบบกล่องสุ่มเครื่องบิน",
      "Normal Box / Medium Box / High Box",
      "ระบบอัตราดรอปตามระดับความหายาก",
      "ระบบรับเครื่องบินซ้ำได้",
      "ระบบสะสมฝูงบินของตัวเอง",
    ],
  },
  {
    id: "phase-6",
    phase: "Phase 6",
    title: "Marketplace",
    summary: "สร้างตลาดซื้อขายให้เครื่องบินมีมูลค่าจริง",
    items: [
      "ระบบตลาดซื้อขายเครื่องบิน",
      "ระบบลงขายการ์ด / ซื้อการ์ดจากผู้เล่นอื่น",
      "ระบบกำหนดราคา",
      "ระบบประวัติการซื้อขาย",
      "ระบบสร้างมูลค่าให้เครื่องบินหายากและเครื่องบินอัปเกรดดี",
    ],
  },
  {
    id: "phase-7",
    phase: "Phase 7",
    title: "Competitive Features",
    summary: "เพิ่มแรงผลักดันด้วยการแข่งขันและอันดับ",
    items: [
      "ระบบจัดอันดับผู้เล่น",
      "ระบบจัดอันดับตามพลัง / รายได้ / ความคืบหน้าด่าน",
      "ระบบกิจกรรมแข่งขันตามช่วงเวลา",
      "ระบบรางวัลสำหรับผู้เล่นอันดับสูง",
      "ระบบกระตุ้นการสะสมและอัปเกรดเครื่องบิน",
    ],
  },
  {
    id: "phase-8",
    phase: "Phase 8",
    title: "Special Content",
    summary: "เพิ่มคอนเทนต์พิเศษให้เกมมีเหตุผลในการกลับมาเล่น",
    items: [
      "เครื่องบิน Special Edition",
      "คอลแลบพิเศษ",
      "ด่านพิเศษ",
      "อีเวนต์จำกัดเวลา",
      "เครื่องบินพิเศษที่ไม่อยู่ในกล่องปกติ",
    ],
  },
  {
    id: "phase-9",
    phase: "Phase 9",
    title: "Social & Retention",
    summary: "ดูแลการกลับมาเล่นซ้ำและการบอกต่อ",
    items: [
      "Daily missions",
      "ระบบภารกิจรายวัน",
      "ระบบโบนัสเข้าเล่นต่อเนื่อง",
      "ระบบกิจกรรมชวนเพื่อน",
      "ระบบแจ้งเตือนกิจกรรม / โปรโมชัน / อัปเดตใหม่",
    ],
  },
  {
    id: "phase-10",
    phase: "Phase 10",
    title: "Expansion",
    summary: "เปิดทางให้คอนเทนต์เติบโตได้ระยะยาว",
    items: [
      "เพิ่มด่านใหม่",
      "เพิ่มศัตรูรูปแบบใหม่",
      "เพิ่มโหมดเกมใหม่",
      "เพิ่มระบบ Guild / Team Battle ในอนาคต",
      "ขยาย economy และ content ให้เล่นได้นานขึ้น",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-20 pb-16">
      <PageHero
        eyebrow="Roadmap"
        title="ROADMAP - AIR FORCE STRIKE (AFS)"
        description="แผนพัฒนาของเกมที่เน้นการวางระบบเกมหลัก การสะสมเครื่องบิน เศรษฐกิจภายในเกม ไปจนถึงคอนเทนต์ระยะยาว"
      >
        <div className="space-y-4">
          <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
              Roadmap at a glance
            </p>
            <p className="mt-2 text-sm leading-7 text-foreground-soft">
              10 phases cover foundation, gameplay, upgrades, economy, marketplace, competition, social retention, and expansion.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
              Clear milestone plan
            </div>
            <div className="rounded-2xl border border-gold/15 bg-white/[0.03] p-4 text-sm leading-7 text-foreground-soft">
              Highlighted phase cards
            </div>
          </div>
        </div>
      </PageHero>

      <PageSectionNav
        title="Roadmap guide"
        description="Use the anchors below to jump directly to each development phase."
        sections={pageSections.roadmap}
      />

      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="AIR FORCE STRIKE"
          title="Every phase is highlighted so the plan reads clearly from start to finish"
          description="Each card below separates the milestone, the main goal, and the feature list that will be built in that phase."
          align="center"
        />
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
        {roadmapPhases.map((phase) => (
          <FeatureCard
            key={phase.id}
            className="h-full"
            eyebrow={phase.phase}
            title={phase.title}
            description={phase.summary}
          >
            <ul className="space-y-2">
              {phase.items.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-foreground-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
}
