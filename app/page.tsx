import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="p-4 md:p-8 space-y-8">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        客製化團體服 · 印樂網風格網站
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {products.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.desc}</p>
              <Button onClick={() => goToProduct(item.slug)}>{item.action}</Button>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        className="bg-gray-100 p-6 rounded-xl text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-lg font-medium">訂閱我們，獲得最新活動與優惠</h3>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Input
            placeholder="輸入您的 Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button>訂閱</Button>
        </div>
      </motion.div>
    </div>
  );
}
