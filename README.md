# Trung Tâm Thông Tin

Cổng tổng hợp 9 bản tin chuyên sâu tiếng Việt — glass premium, cập nhật 8:00 mỗi sáng.

**Live:** https://dinhtri-dinh-tri-vus-projects.vercel.app

## 9 chuyên mục

| # | Bản tin | Link công khai |
|---|---------|----------------|
| 1 | AI News Report | https://muse.ai/s/ai-news-report-xjj6dvbc8gxeb |
| 2 | VNindex Report | https://muse.ai/s/vnindex-report-xih6drxxxexmbxexo |
| 3 | Macro & Market Intelligence | https://muse.ai/s/macro-market-intelligence-qxj6dvjphp84 |
| 4 | Business Opportunity Hub | https://muse.ai/s/business-opportunity-hub-ip6dwfxi4hxkg |
| 5 | Gold Report VN | https://muse.ai/s/gold-report-vn-xfxf6dxz8xlpnsz |
| 6 | VN Real Estate | https://muse.ai/s/vn-real-estate-xdxr6dxzcgqdxrv |
| 7 | Crypto Deep Dive | https://muse.ai/s/crypto-deep-dive-bh6dxzftxq8ot |
| 8 | Startup Funding VN | https://muse.ai/s/startup-funding-vn-xfl6dxzadxdxukxl |
| 9 | World Morning Brief | https://muse.ai/s/world-morning-brief-xdxn6dxzg3xvxwxk9 |

## Cập nhật tin nổi bật (8:30 hằng ngày)

Cron `dinhtri-hub-0830-daily` (Asia/Ho_Chi_Minh):
1. Mở 9 link công khai, trích 1–2 tin nổi bật mỗi báo
2. Ghi vào `data/featured.json` (kèm `updated_at`)
3. Deploy lại Vercel: `python3 ~/workspace/dinhtri-deploy.py`
4. Đồng bộ file lên GitHub (nếu repo đã có)

## Deploy thủ công

```bash
python3 ~/workspace/dinhtri-deploy.py
```

Deploy qua Vercel MCP file-upload tới project `dinhtri` (production).
