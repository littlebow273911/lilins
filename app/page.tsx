'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const products = [
    { title: "短袖 T 恤", desc: "多色可選，適合團體活動與日常穿著。", action: "查看商品", slug: "tshirt" },
    { title: "POLO 衫", desc: "專業與舒適兼具，打造品牌形象首選。", action: "立即訂製", slug: "polo" },
    { title: "外套 / 帽T", desc: "秋冬必備，團體活動造型加分。", action: "選購外套", slug: "jacket" },
    { title: "運動服", desc: "排汗速乾，適合戶外活動與競賽使用。", action: "查看運動服", slug: "sportswear" },
    { title: "工作服", desc: "高耐磨材質，適用於各行業專業穿搭。", action: "立即選購", slug: "uniform" },
    { title: "童裝", desc: "小朋友專屬款式，色彩繽紛又可愛。", action: "逛逛童裝", slug: "kids" },
  ];

  const goToProduct = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
        客製化團體服 · 印樂網風格網站
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
        {products.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => goToProduct(item.slug)}>{item.action}</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem", padding: "1rem", backgroundColor: "#f3f3f3", borderRadius: "8px", textAlign: "center" }}>
        <h3>訂閱我們，獲得最新活動與優惠</h3>
        <input
          type="email"
          placeholder="輸入您的 Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: "0.5rem", padding: "0.5rem", borderRadius: "4px" }}
        />
        <button style={{ padding: "0.5rem 1rem" }}>訂閱</button>
      </div>
    </div>
  );
}
