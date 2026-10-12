# IndiaNextTech Academy

Courses, free PDF notes aur internships wali website. React + Vite se bani hai (Next.js ki zarurat nahi).
Dark aur light mode dono hain.

## 1. Chalane ka tarika (pehli baar)

1. Node.js install karo (https://nodejs.org, LTS version).
2. Is folder me terminal kholo aur ye chalao:

```
npm install
npm run dev
```

3. Browser me jo link aaye (jaise http://localhost:5173) wo kholo.
4. Jab site final ho jaye: `npm run build` chalao. `dist` folder ban jayega, wahi hosting par jata hai.

## 2. Kya kahan badalna hai

| Kaam | File |
|---|---|
| Course add / remove / fee / syllabus | `src/data/courses.js` |
| Internship (job) add / remove | `src/data/jobs.js` |
| Free PDF notes add / remove | `src/data/notes.js` + PDF ko `public/notes/` me daalo |
| WhatsApp number, email, social links, Google Form | `src/data/siteConfig.js` |
| Colours (dark / light) | `src/styles/variables.css` |
| Hero ka heading aur text | `src/components/Hero.jsx` |
| Enroll ke 3 steps | `src/components/HowItWorks.jsx` |

### Course add karna
`courses.js` me kisi ek course ka poora `{ ... },` block copy karo, uske neeche paste karo aur values badlo.
`id` har course ka alag hona chahiye. `track` me `"web"`, `"ai"` ya `"placement"` likho.
Naya course Enroll form ki dropdown me apne aap aa jata hai. Syllabus `syllabus` ke andar likhte hain: module ka `title` aur uske `topics`.

### Course hatana
Us course ka poora `{ ... },` block delete kar do. Bas.

### Job add / remove karna
`jobs.js` me wahi tarika. Job ko temporarily chhupana ho to `isOpen: false` likh do. Saari jobs hat jayengi to site par "No openings right now" message dikhega.

### Notes add karna
1. PDF ko `public/notes/` folder me copy karo (naam me space na rakho, jaise `react-notes.pdf`).
2. `notes.js` me naya block banao aur `file: "react-notes.pdf"` likho.

Abhi 3 sample PDFs rakhi hain. Unhe apni asli PDF se replace kar do (same naam rakhoge to `notes.js` badalna nahi padega).

## 3. Google Form connect karna

Jab tak form connect nahi hai, "Enroll now" dabane par WhatsApp khulta hai (message pehle se likha hua). Google Form connect karne par details seedhe aapki Google Sheet me aayengi.

1. Google Form banao. Fields (sab **Short answer**): Name, WhatsApp, Email, Course.
   Course ko dropdown mat banao, Short answer rakho, warna naam match na hone par answer reject ho sakta hai.
2. Form me "Restrict to users in the organization" aur "Limit to 1 response" band rakho (login nahi maangna chahiye).
3. Form ke upar teen dots (⋮) → **Get pre-filled link** → har field me kuch bhi likho → **Get link** → link copy karo.
4. Link aisa dikhega:
   `https://docs.google.com/forms/d/e/XXXX/viewform?usp=pp_url&entry.111=a&entry.222=b&entry.333=c&entry.444=d`
5. `siteConfig.js` me:
   - `actionUrl` me `viewform?...` wala hissa hata kar `formResponse` likho:
     `https://docs.google.com/forms/d/e/XXXX/formResponse`
   - `entry.111`, `entry.222` ... ko fields ke saamne daalo, **usi order me jisme aapne form me values bhari thi** (name, whatsapp, email, course).
6. Internship ke liye ek alag Google Form banao: Name, WhatsApp, Email, Role, Resume link, aur `forms.apply` me wahi karo.
7. Test karo. Responses Form ke **Responses** tab ya Google Sheet me dikhenge.

## 4. Subdomain par live karna (learn.indianexttech.com)

1. Code ko GitHub par daalo.
2. Vercel (ya Netlify) par "New Project" → apni repo chuno. Framework: **Vite**. Deploy dabao.
3. Project Settings → Domains me `learn.indianexttech.com` add karo.
4. Domain provider ke DNS me ek **CNAME** record banao: Name `learn`, Value jo Vercel dikhaye.
5. 10 se 30 minute me site us address par khul jayegi.

## 5. Notes

- Fees abhi sirf example hain. `courses.js` me apni fees likh do.
- Footer ka email khali hai. `siteConfig.js` me `email` bhar do tabhi dikhega.
- Theme (dark / light) user ke browser me yaad rehti hai.
