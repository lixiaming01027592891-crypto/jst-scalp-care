# JSt.*頭皮養護中心 網站修改記錄

> **網站：** https://jst-scalp-care.pages.dev/  
> **框架：** Astro 4.x + Tailwind CSS 3.x  
> **部署：** Cloudflare Pages (GitHub 自動同步)  
> **最後更新：** 2026-05-10

---

## 目錄

- [V5 - SEO 審查修復](#v5---seo-審查修復-2026-05-10)
- [V4 - 品牌名稱重命名](#v4---品牌名稱重命名-2026-05-10)
- [V3 - Linktree + 母親節活動頁](#v3---linktree--母親節活動頁-2026-05-08)
- [V2 - 聯絡按鈕 + SEO 基礎](#v2---聯絡按鈕--seo-基礎-2026-05-04)
- [V1 - 六頁形象官網](#v1---六頁形象官網-2026-05-04)

---

## V5 - SEO 審查修復 (2026-05-10)

### 審查報告來源
外部 SEO 技術審查報告指出 V4 存在 3 項高嚴重度迴歸問題 + 2 項中嚴重度問題。

### 修復項目

#### 🔴 P0 - /about 頁面重複內容問題

| 項目 | 內容 |
|------|------|
| **問題** | 不存在的 `/about` URL 回退顯示首頁內容（Cloudflare Pages SPA fallback） |
| **影響** | 重複內容懲罰風險、索引混淆 |
| **修復** | 新建 `src/pages/404.astro`，構建輸出 `404.html` |
| **結果** | Cloudflare Pages 自動對不存在的路徑返回 404 頁面 |

```
新建文件：src/pages/404.astro
輸出文件：dist/404.html
```

#### 🔴 P1 - og:type 全站錯誤

| 項目 | 內容 |
|------|------|
| **問題** | 全站 8 個頁面 `og:type` 皆為 `business.business` |
| **影響** | OG 標籤語義不正確，影響社交分享預覽 |
| **修復** | `Layout.astro` 改為 `content="website"` |

```diff
- <meta property="og:type" content="business.business" />
+ <meta property="og:type" content="website" />
```

#### 🔴 P1 - 404 軟性錯誤

| 項目 | 內容 |
|------|------|
| **問題** | 不存在的 URL 返回 HTTP 200（回退到首頁） |
| **影響** | 軟性 404（Soft 404）被 Google 懲罰、浪費爬蟲預算 |
| **修復** | 建立獨立 404 頁面，Cloudflare Pages 自動處理 HTTP 404 狀態碼 |

#### 🟡 P2 - OG 圖片全站共用

| 頁面 | 修復前 | 修復後 |
|------|--------|--------|
| `/services/` | `hero-bg.jpg` | `service-spa.jpg` |
| `/scalp-care/` | `hero-bg.jpg` | `scalp-illust.jpg` |
| `/pricing/` | `hero-bg.jpg` | `service-care.jpg` |
| `/faq/` | `hero-bg.jpg` | `service-detect.jpg` |
| `/contact/` | `hero-bg.jpg` | `ambiance-1.jpg` |
| `/` | `hero-bg.jpg` | `hero-bg.jpg`（保持） |
| `/links/` | `hero-bg.jpg` | `hero-bg.jpg`（保持） |
| `/mothers-day/` | `hero-bg.jpg` | `hero-bg.jpg`（保持） |

#### 🟡 P2 - Schema URL 全指向首頁

| 項目 | 內容 |
|------|------|
| **問題** | 所有頁面的 JSON-LD `url` 皆為首頁 URL |
| **影響** | 結構化資料語義混亂 |
| **修復** | `Layout.astro` 中 Schema `url` 改為使用 `canonical` 變數 |

```diff
- "url": BRAND.url,
+ "url": canonical,
```

### 修改文件清單（V5）

```
M  src/layouts/Layout.astro          # og:type, Schema URL
M  src/pages/services.astro           # ogImage: service-spa.jpg
M  src/pages/scalp-care.astro         # ogImage: scalp-illust.jpg
M  src/pages/pricing.astro            # ogImage: service-care.jpg
M  src/pages/faq.astro                # ogImage: service-detect.jpg
M  src/pages/contact.astro            # ogImage: ambiance-1.jpg
A  src/pages/404.astro                # 新增 404 頁面
```

---

## V4 - 品牌名稱重命名 (2026-05-10)

### 需求
將全站品牌名稱從「JST 頭皮護理」統一更改為「JSt.*頭皮養護中心 / Scalp Care Art Center」。

### 修改範圍

#### 1. 品牌資料中心 (`src/data/siteData.ts`)

```diff
- name: 'JST 頭皮護理',
+ name: 'JSt.*頭皮養護中心',
- description: '新竹專業頭皮養護與舒壓 SPA',
+ description: 'Scalp Care Art Center | 新竹專業頭皮養護與舒壓 SPA',
```

#### 2. 各頁面 Title & Description

| 頁面 | 修復前 Title | 修復後 Title |
|------|-------------|-------------|
| `/` | `JST 頭皮護理 \| 新竹專業頭皮養護與舒壓 SPA` | `JSt.*頭皮養護中心 \| Scalp Care Art Center` |
| `/services/` | `服務項目 \| JST 頭皮護理` | `服務項目 \| JSt.*頭皮養護中心` |
| `/scalp-care/` | `頭皮護理介紹 \| JST 頭皮護理` | `頭皮護理介紹 \| JSt.*頭皮養護中心` |
| `/pricing/` | `價格方案 \| JST 頭皮護理` | `價格方案 \| JSt.*頭皮養護中心` |
| `/faq/` | `常見問題 \| JST 頭皮護理` | `常見問題 \| JSt.*頭皮養護中心` |
| `/contact/` | `預約與聯絡 \| JST 頭皮護理` | `預約與聯絡 \| JSt.*頭皮養護中心` |
| `/links/` | `JSt.* 頭皮養護中心 \| 官方連結` | `JSt.*頭皮養護中心 \| 官方連結` |
| `/mothers-day/` | （保持） | `母親節限定活動 \| JSt.*頭皮養護中心` |

#### 3. 共用元件

| 文件 | 修改內容 |
|------|---------|
| `Navbar.astro` | Logo 文字：`<span class="text-sage">JST</span> 頭皮護理` → `JSt.*<span class="text-sage">頭皮養護中心</span>` |
| `Footer.astro` | Logo + 副標題加入 `Scalp Care Art Center \|` |

#### 4. 頁面內文

| 文件 | 修改位置 |
|------|---------|
| `index.astro` | H1「JST 頭皮護理 / 新竹的療癒角落」→「JSt.*頭皮養護中心 / 新竹的療癒角落」 |
| `index.astro` | 品牌故事段落中「JST 頭皮護理位於新竹...」→「JSt.*頭皮養護中心位於新竹...」 |
| `index.astro` | Hero 圖片 alt「JST 頭皮護理沙龍空間」→「JSt.*頭皮養護中心沙龍空間」 |
| `contact.astro` | 表單隱私權聲明「JST 頭皮護理蒐集...」→「JSt.*頭皮養護中心蒐集...」 |

### 修改文件清單（V4）

```
M  src/data/siteData.ts              # BRAND.name, BRAND.description
M  src/components/Navbar.astro        # Logo 文字
M  src/components/Footer.astro        # Logo + 副標題
M  src/pages/index.astro              # Title, H1, 內文, alt
M  src/pages/services.astro           # Title, Description
M  src/pages/scalp-care.astro         # Title, Description
M  src/pages/pricing.astro            # Title, Description
M  src/pages/faq.astro                # Title, Description
M  src/pages/contact.astro            # Title, Description, 隱私權聲明
M  src/pages/links.astro              # Title, Description
M  src/pages/mothers-day.astro        # Description
```

---

## V3 - Linktree + 母親節活動頁 (2026-05-08)

### 新增頁面

#### 1. `/links/` - 官方連結頁（Linktree 風格）

| 項目 | 內容 |
|------|------|
| **用途** | 社群媒體 Bio Link（LINE、FB、IG 共用） |
| **設計** | 白色背景、置中排版、JSt. Logo 圓形 + 品牌名 |
| **按鈕** | 6 個長條形漸層按鈕（官網 / LINE / Facebook / Instagram / 蝦皮 / 電話） |
| **橫幅** | 母親節活動推廣橫幅（連到 `/mothers-day/`） |
| **Meta** | 獨立 title、description、OG 標籤 |

```
新增文件：
  src/pages/links.astro
```

#### 2. `/mothers-day/` - 母親節限定活動頁

| 項目 | 內容 |
|------|------|
| **活動期間** | 2025/5/1 - 6/15 |
| **Hero Banner** | 背景圖 + 漸層遮罩 + 活動標題 + 期間標籤 |
| **價格卡片** | NT$1,500（原價 NT$2,130）、3 堂 9 折 |
| **課程內容** | 能量精油頭刮 Spa + 客製化肩頸循環按摩 + 淨化毛囊 + 贈頭皮光療活氧 |
| **優勢區塊** | 4 個「為什麼選擇 JSt.*」優勢卡片 |
| **CTA** | LINE 預約 + 電話預約雙按鈕 |
| **元件** | 使用 Layout.astro + FloatingContact.astro |

```
新增文件：
  src/pages/mothers-day.astro
```

---

## V2 - 聯絡按鈕 + SEO 基礎 (2026-05-04)

### 新增元件

#### FloatingContact.astro - 右側固定聯絡按鈕

| 項目 | 內容 |
|------|------|
| **位置** | 桌面 + 移動端統一：畫面右側 4 個圓形按鈕 |
| **按鈕** | LINE（綠色）、Facebook（藍色）、Instagram（漸層）、電話（鼠尾草綠） |
| **互動** | hover 顯示左側文字標籤 + 放大 10% |
| **修正歷程** | 移動端曾誤改為底部導航欄 → 用戶要求改回右側按鈕 → 統一桌面/移動端體驗 |

```
新增文件：
  src/components/FloatingContact.astro
```

### SEO 基礎建設

| 項目 | 內容 |
|------|------|
| **robots.txt** | `Allow: /` + Sitemap 引用 |
| **sitemap.xml** | 8 個 URL（6 主頁 + links + mothers-day） |
| **Open Graph** | og:title、og:description、og:image、og:image:width/height、og:locale |
| **Twitter Card** | twitter:card、twitter:title、twitter:description、twitter:image |
| **LocalBusiness Schema** | JSON-LD（名稱、電話、地址、營業時間、價格範圍） |
| **Canonical** | 每頁自參照 canonical URL |
| **Lang** | `<html lang="zh-TW">` |

---

## V1 - 六頁形象官網 (2026-05-04)

### 技術架構

| 項目 | 選型 |
|------|------|
| 框架 | Astro 4.x（純靜態輸出，零 JS runtime） |
| 樣式 | Tailwind CSS 3.x + 自定義 design token |
| 字體 | Noto Sans TC（Google Fonts） |
| 部署 | Cloudflare Pages |
| 路由 | Astro file-based routing（每頁獨立 index.html） |

### 頁面結構

| 頁面 | 路徑 | 主要內容 |
|------|------|---------|
| 首頁 | `/` | Hero 大圖、品牌故事、核心服務（4 卡）、體驗流程（5 步）、沙龍環境、CTA |
| 服務項目 | `/services/` | 6 項服務詳細介紹、服務比較表格 |
| 頭皮護理 | `/scalp-care/` | 知識卡片、問題徵兆、為什麼選 JSt.、日常保養建議 |
| 價格方案 | `/pricing/` | 3 種定價方案、加購項目、會員儲值優惠、FAQ 摺疊 |
| 常見問題 | `/faq/` | 4 大分類（預約/療程/效果/產品）摺疊問答 |
| 預約聯絡 | `/contact/` | 3 欄聯絡方式（LINE/電話/表單）、店家資訊、線上預約表單 |

### 共用元件

| 元件 | 功能 |
|------|------|
| `Layout.astro` | HTML 骨架、Meta 標籤、OG、Schema、Font、Navbar/Footer 包裹 |
| `Navbar.astro` | 固定導航欄（桌面橫排 + 移動端漢堡選單）、LINE CTA 按鈕 |
| `Footer.astro` | 品牌資訊、快速連結、聯絡資訊、社交圖示、版權 |

### 自定義 Design Token

| Token | 色值 | 用途 |
|-------|------|------|
| `cream` | `#FAF8F5` | 主要背景 |
| `ivory` | `#F5F3EE` | 次要背景 |
| `sage` | `#A8B5A0` | 主色（按鈕/標題/強調） |
| `sage-dark` | `#8A9A82` | hover 狀態 |
| `sage-light` | `#E8EDE5` | 輕色背景 |
| `gold` | `#C8A97E` | 精選標籤/高亮 |
| `wood` | `#B8A088` | 輔助色 |
| `text-primary` | `#3D3D3D` | 主文字 |
| `text-secondary` | `#6B6B6B` | 次文字 |

---

## 附錄：SEO 審查評分改善

| 項目 | V4 評分 | V5 評分 | 改善 |
|------|---------|---------|------|
| 索引基礎 | 2/5 | 4/5 | 404 頁面正常、無重複內容 |
| 標籤優化 | 2/5 | 5/5 | og:type 正確、各頁獨立 ogImage |
| 結構化資料 | 3/5 | 5/5 | Schema URL 指向自身 |
| Sitemap | 4/5 | 4/5 | 保持（新增 404 頁面不列入） |
| SSR / 內容 | 4/5 | 4/5 | 保持 |
| 圖片優化 | 3/5 | 4/5 | 各頁獨立 OG 圖片 |

---

> 本文件記錄 JSt.*頭皮養護中心官網所有版本變更，供長期 SEO 維護參考。
