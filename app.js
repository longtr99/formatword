const PRESETS = {
  ufm: {
    name: "UFM - Trường ĐH Tài chính - Marketing",
    desc: "Times New Roman • 13pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
    ufm_sdh: {
    name: "UFM (Sau đại học) - Luận văn / Đề án Thạc sĩ",
    desc: "Times New Roman • 13pt • Lề T3.5 - P2 - Tr3.5 - D3.0 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 3.5, mBottom: 3.0, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },

  ueh: {
    name: "UEH - Đại học Kinh tế TP.HCM",
    desc: "Times New Roman • 13pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  ftu: {
    name: "FTU - Trường Đại học Ngoại thương",
    desc: "Times New Roman • 14pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 14, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  neu: {
    name: "NEU - Đại học Kinh tế Quốc dân",
    desc: "Times New Roman • 14pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 14, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  hust: {
    name: "HUST - Đại học Bách khoa Hà Nội",
    desc: "Times New Roman • 13pt • Lề T3.0 - P2 - Tr2.0 - D2.0 cm • Giãn dòng 1.3",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.3,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.0,
    mTop: 2.0, mBottom: 2.0, mLeft: 3.0, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  hcmus: {
    name: "HCMUS - ĐH Khoa học Tự nhiên",
    desc: "Times New Roman • 13pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  uit: {
    name: "UIT - ĐH Công nghệ Thông tin",
    desc: "Times New Roman • 13pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  fpt: {
    name: "FPTU - Trường Đại học FPT",
    desc: "Times New Roman • 13pt • Lề T3.0 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.0, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  tonducthang: {
    name: "TDTU - Trường ĐH Tôn Đức Thắng",
    desc: "Times New Roman • 13pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
    alignment: "Justified", pageNumPos: "bottom_center", hideFirstPage: true
  },
  apa7: {
    name: "Chuẩn Quốc tế APA 7th Edition",
    desc: "Times New Roman • 12pt • Lề đều 2.54 cm (1 inch) • Giãn dòng 2.0 • Căn trái",
    fontFamily: "Times New Roman", fontSize: 12, lineSpacing: 2.0,
    spaceBefore: 0, spaceAfter: 0, firstIndent: 1.27,
    mTop: 2.54, mBottom: 2.54, mLeft: 2.54, mRight: 2.54,
    alignment: "Left", pageNumPos: "top_right", hideFirstPage: false
  },
  nd30: {
    name: "Hành chính Nhà nước (Nghị định 30/2020)",
    desc: "Times New Roman • 14pt • Lề T3.0 - P1.5 - Tr2.0 - D2.0 cm • Giãn dòng 1.15",
    fontFamily: "Times New Roman", fontSize: 14, lineSpacing: 1.15,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.0, mBottom: 2.0, mLeft: 3.0, mRight: 1.5,
    alignment: "Justified", pageNumPos: "top_center", hideFirstPage: true
  }
};

Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    selectPreset("ufm");
    showStatus("Đã kết nối Microsoft Word", 2000);
  }
});

function switchTab(tabId, btn) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById("tab-" + tabId).classList.add("active");
  btn.classList.add("active");
}

function showStatus(msg, timeout = 3000) {
  const el = document.getElementById("status");
  if (el) {
    el.textContent = msg;
    el.classList.add("show");
    if (timeout > 0) {
      setTimeout(() => el.classList.remove("show"), timeout);
    }
  }
  const box = document.getElementById("inlineResultBox");
  if (box) {
    box.style.display = "block";
    box.textContent = msg;
    box.style.background = msg.includes("❌") ? "#fef2f2" : "#ecfdf5";
    box.style.borderColor = msg.includes("❌") ? "#ef4444" : "#10b981";
    box.style.color = msg.includes("❌") ? "#991b1b" : "#065f46";
  }
}


function selectPreset(key) {
  document.getElementById("presetSelect").value = key;
  document.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("active", c.dataset.preset === key);
  });

  if (key === "custom") {
    updateCustomSummary();
    return;
  }

  const p = PRESETS[key];
  if (!p) return;

  document.getElementById("fontFamily").value = p.fontFamily;
  document.getElementById("fontSize").value = p.fontSize;
  document.getElementById("lineSpacing").value = p.lineSpacing.toString();
  document.getElementById("spaceBefore").value = p.spaceBefore;
  document.getElementById("spaceAfter").value = p.spaceAfter;
  document.getElementById("firstIndent").value = p.firstIndent;
  document.getElementById("mTop").value = p.mTop;
  document.getElementById("mBottom").value = p.mBottom;
  document.getElementById("mLeft").value = p.mLeft;
  document.getElementById("mRight").value = p.mRight;
  document.getElementById("alignment").value = p.alignment;
  document.getElementById("pageNumPos").value = p.pageNumPos;

  document.getElementById("presetSummary").innerHTML = `<strong>${p.name}:</strong><br/>${p.desc}`;
}

function markCustom() {
  document.getElementById("presetSelect").value = "custom";
  document.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("active", c.dataset.preset === "custom");
  });
  updateCustomSummary();
}

function updateCustomSummary() {
  const f = document.getElementById("fontFamily").value;
  const sz = document.getElementById("fontSize").value;
  const ls = document.getElementById("lineSpacing").value;
  const mL = document.getElementById("mLeft").value;
  const mR = document.getElementById("mRight").value;
  const mT = document.getElementById("mTop").value;
  const mB = document.getElementById("mBottom").value;
  document.getElementById("presetSummary").innerHTML =
    `<strong>Cấu hình tùy chỉnh:</strong><br/>${f} • ${sz}pt • Lề T${mL} - P${mR} - Tr${mT} - D${mB} cm • Giãn dòng ${ls}`;
}

const cmToPt = (cm) => cm * 28.3464567;

async function applySelectedStandard() {
  try {
    showStatus("⏳ Đang chuẩn hóa văn bản...", 0);

    if (document.getElementById("optAutoClean").checked) {
      await runSilentClean();
    }

    await Word.run(async (context) => {
      const fontFamily = document.getElementById("fontFamily").value;
      const fontSize = parseFloat(document.getElementById("fontSize").value);
      const lineMult = parseFloat(document.getElementById("lineSpacing").value);
      const before = parseFloat(document.getElementById("spaceBefore").value);
      const after = parseFloat(document.getElementById("spaceAfter").value);
      const indent = parseFloat(document.getElementById("firstIndent").value);
      const mTop = parseFloat(document.getElementById("mTop").value);
      const mBottom = parseFloat(document.getElementById("mBottom").value);
      const mLeft = parseFloat(document.getElementById("mLeft").value);
      const mRight = parseFloat(document.getElementById("mRight").value);
      const align = document.getElementById("alignment").value;

      const sections = context.document.sections;
      sections.load("items");
      const paragraphs = context.document.body.paragraphs;
      paragraphs.load("items,styleBuiltIn");
      await context.sync();

      sections.items.forEach((sec) => {
        sec.pageSetup.paperSize = Word.PaperSize.a4;
        sec.pageSetup.topMargin = cmToPt(mTop);
        sec.pageSetup.bottomMargin = cmToPt(mBottom);
        sec.pageSetup.leftMargin = cmToPt(mLeft);
        sec.pageSetup.rightMargin = cmToPt(mRight);
      });

      paragraphs.items.forEach((p) => {
        p.font.name = fontFamily;
        const isHeading = p.styleBuiltIn && p.styleBuiltIn.toString().startsWith("Heading");
        if (!isHeading) {
          p.font.size = fontSize;
          p.lineSpacing = fontSize * lineMult;
          p.spaceBefore = before;
          p.spaceAfter = after;
          p.firstLineIndent = cmToPt(indent);
          p.alignment = align === "Justified" ? Word.Alignment.justified : Word.Alignment.left;
        }
      });

      await context.sync();
    });

    if (document.getElementById("optPageNumber").checked) {
      await applyPageNumbersOnly(true);
    }
const optCleanAiWeb = document.getElementById("optCleanAiWeb")?.checked;
const optRomanPages = document.getElementById("optRomanPages")?.checked;
const optAutoCaption = document.getElementById("optAutoCaption")?.checked;
const optFitMedia = document.getElementById("optFitMedia")?.checked;

const activeFont = document.getElementById("fontSelect")?.value || "Times New Roman";
const activeSize = parseFloat(document.getElementById("fontSizeInput")?.value) || 13;

if (optCleanAiWeb) {
  await cleanAiAndWebTraces(context, doc, activeFont, activeSize);
}
if (optFitMedia) {
  await fitImagesAndTablesSafe(context, doc);
}
if (optAutoCaption) {
  await autoGenerateCaptions(context, doc);
}
if (optRomanPages) {
  await applyRomanHeaderFooterBeforeChapter1(context, doc);
}
// Chạy bổ sung V2.1 (Heading, Landscape, Chú thích, Tài liệu tham khảo, Mục lục)
const optAutoToc = document.getElementById("optAutoToc")?.checked;
const optKeepLandscape = document.getElementById("optKeepLandscape")?.checked;
const optBoldCaptionLabel = document.getElementById("optBoldCaptionLabel")?.checked;
const optItalicCaptionDesc = document.getElementById("optItalicCaptionDesc")?.checked;
const optRefHanging = document.getElementById("optRefHanging")?.checked;
const optCheckFrontOrder = document.getElementById("optCheckFrontOrder")?.checked;

const hSizes = {
  h1: parseFloat(document.getElementById("sizeH1")?.value) || 14,
  h2: parseFloat(document.getElementById("sizeH2")?.value) || 14,
  h3: parseFloat(document.getElementById("sizeH3")?.value) || 13,
  cap: parseFloat(document.getElementById("sizeCaption")?.value) || 12
};

await applyHeadingAndCaptionSizes(context, doc, activeFont, hSizes, optBoldCaptionLabel, optItalicCaptionDesc);

if (optKeepLandscape) {
  await fitLandscapeAwareMedia(context, doc);
}
if (optRefHanging) {
  await formatReferencesHangingIndent(context, doc);
}
if (optAutoToc) {
  await insertOrUpdateAcademicToc(context, doc);
}
if (optCheckFrontOrder) {
  await checkFrontMatterOrderNotice(context, doc);
}

// Chạy bổ sung V2.2 (Chuẩn trích dẫn, TOC 3/4 cấp, Vị trí số trang V2.2)
const citationStyle = document.getElementById("citationStyleSelect")?.value || "apa7";
const tocDepth = document.getElementById("tocDepthSelect")?.value || "1-4";
const pagePosV22 = document.getElementById("pagePosV22")?.value || "keep";
const optCleanRefQuotes = document.getElementById("optCleanRefQuotes")?.checked;

await applyCitationAndTocV22(context, doc, citationStyle, tocDepth, optCleanRefQuotes);
if (pagePosV22 !== "keep") {
  await applyPageNumberPositionOOXML(context, doc, pagePosV22);
}
  

    showStatus("✅ Đã chuẩn hóa tài liệu hoàn tất!");
  } catch (err) {
    showStatus("❌ Lỗi: " + err.message, 5000);
  }
}

async function applyPageNumbersOnly(silent = false) {
  await Word.run(async (context) => {
    const pos = document.getElementById("pageNumPos").value;
    const fontFamily = document.getElementById("fontFamily").value;
    const presetKey = document.getElementById("presetSelect").value;
    const hideFirst = presetKey === "apa7" ? false : true;

    const firstSection = context.document.sections.getFirst();
    firstSection.pageSetup.differentFirstPageHeaderFooter = hideFirst;

    const header = firstSection.getHeader(Word.HeaderFooterType.primary);
    const footer = firstSection.getFooter(Word.HeaderFooterType.primary);
    header.clear();
    footer.clear();

    let targetContainer = footer;
    let align = Word.Alignment.centered;

    if (pos === "top_center") {
      targetContainer = header;
      align = Word.Alignment.centered;
    } else if (pos === "top_right") {
      targetContainer = header;
      align = Word.Alignment.right;
    }

    const p = targetContainer.insertParagraph("", Word.InsertLocation.start);
    p.alignment = align;
    p.font.name = fontFamily;
    p.font.size = 12;
    if (typeof p.insertField === "function") {
  p.insertField(Word.InsertLocation.end, Word.FieldType.page);
} else {
  const pageOoxml = '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>';
  p.insertOoxml(pageOoxml, Word.InsertLocation.end);
}
    await context.sync();
    if (!silent) showStatus("✅ Đã cập nhật đánh số trang!");
  });
}

async function runSilentClean() {
  await Word.run(async (context) => {
    const results = context.document.body.search("  ", { matchWildcards: false });
    results.load("items");
    await context.sync();
    while (results.items.length > 0) {
      results.items.forEach((item) => item.insertText(" ", Word.InsertLocation.replace));
      await context.sync();
      const next = context.document.body.search("  ", { matchWildcards: false });
      next.load("items");
      await context.sync();
      if (next.items.length === 0) break;
      results.items = next.items;
    }

    const puncts = [".", ",", ";", ":", "!", "?"];
    for (const p of puncts) {
      const badSpace = context.document.body.search(" " + p, { matchWildcards: false });
      badSpace.load("items");
      await context.sync();
      badSpace.items.forEach((item) => item.insertText(p, Word.InsertLocation.replace));
      await context.sync();
    }
  });
}

async function removeDoubleSpaces() {
  await runSilentClean();
  showStatus("✅ Đã xóa khoảng trắng kép & lỗi dấu câu!");
}

async function removeEmptyLines() {
  await Word.run(async (context) => {
    const paragraphs = context.document.body.paragraphs;
    paragraphs.load("items,text");
    await context.sync();
    let count = 0;
    for (let i = paragraphs.items.length - 2; i >= 0; i--) {
      if (paragraphs.items[i].text.trim() === "") {
        paragraphs.items[i].delete();
        count++;
      }
    }
    await context.sync();
    showStatus(`✅ Đã xóa ${count} dòng trống thừa!`);
  });
}

async function fixPunctuationSpaces() {
  await Word.run(async (context) => {
    const puncts = [".", ",", ";", ":", "!", "?"];
    for (const p of puncts) {
      const badSpace = context.document.body.search(" " + p, { matchWildcards: false });
      badSpace.load("items");
      await context.sync();
      badSpace.items.forEach((item) => item.insertText(p, Word.InsertLocation.replace));
      await context.sync();
    }
    showStatus("✅ Đã chuẩn hóa khoảng trắng dấu câu!");
  });
}

async function softBreakToParagraph() {
  await Word.run(async (context) => {
    const breaks = context.document.body.search("^l", { matchWildcards: false });
    breaks.load("items");
    await context.sync();
    breaks.items.forEach((b) => b.insertText("^p", Word.InsertLocation.replace));
    await context.sync();
    showStatus("✅ Đã chuyển Shift+Enter thành Enter!");
  });
}

async function cleanAllErrors() {
  showStatus("⏳ Đang dọn dẹp toàn bộ lỗi...", 0);
  await softBreakToParagraph();
  await runSilentClean();
  await removeEmptyLines();
  showStatus("✅ Hoàn tất dọn dẹp toàn bộ văn bản!");
}

async function changeCase(mode) {
  await Word.run(async (context) => {
    const range = context.document.getSelection();
    range.load("text");
    await context.sync();
    let txt = range.text;
    if (!txt) {
      showStatus("⚠️ Hãy bôi đen đoạn văn bản cần chuyển đổi trước!");
      return;
    }
    if (mode === "UPPER") txt = txt.toUpperCase();
    else if (mode === "LOWER") txt = txt.toLowerCase();
    else if (mode === "TITLE") {
      txt = txt.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    } else if (mode === "SENTENCE") {
      txt = txt.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    }
    range.insertText(txt, Word.InsertLocation.replace);
    await context.sync();
    showStatus("✅ Đã chuyển đổi kiểu chữ!");
  });
}

async function applyHeadingStyle(level) {
  await Word.run(async (context) => {
    const fontFamily = document.getElementById("fontFamily").value;
    const fontSize = parseFloat(document.getElementById("fontSize").value);
    const range = context.document.getSelection();
    const paragraphs = range.paragraphs;
    paragraphs.load("items,text");
    await context.sync();

    paragraphs.items.forEach((p) => {
      p.font.name = fontFamily;
      p.font.size = level === 1 ? fontSize + 1 : fontSize;
      p.firstLineIndent = 0;
      p.spaceBefore = 6;
      p.spaceAfter = 6;
      if (level === 1) {
        p.styleBuiltIn = Word.BuiltInStyleName.heading1;
        p.insertText(p.text.toUpperCase(), Word.InsertLocation.replace);
        p.font.bold = true;
        p.font.italic = false;
        p.alignment = Word.Alignment.centered;
      } else if (level === 2) {
        p.styleBuiltIn = Word.BuiltInStyleName.heading2;
        p.font.bold = true;
        p.font.italic = false;
        p.alignment = Word.Alignment.left;
      } else if (level === 3) {
        p.styleBuiltIn = Word.BuiltInStyleName.heading3;
        p.font.bold = true;
        p.font.italic = true;
        p.alignment = Word.Alignment.left;
      }
    });
    await context.sync();
    showStatus(`✅ Đã gán Heading ${level}!`);
  });
}

async function insertLandscapeSection() {
  await Word.run(async (context) => {
    const range = context.document.getSelection();
    range.insertBreak(Word.BreakType.sectionNext, Word.InsertLocation.after);
    await context.sync();
    const sections = context.document.sections;
    sections.load("items");
    await context.sync();
    sections.items[sections.items.length - 1].pageSetup.orientation = Word.PageOrientation.landscape;
    await context.sync();
    showStatus("✅ Đã tạo trang mới hướng Ngang (Landscape)!");
  });
}

async function insertPortraitSection() {
  await Word.run(async (context) => {
    const range = context.document.getSelection();
    range.insertBreak(Word.BreakType.sectionNext, Word.InsertLocation.after);
    await context.sync();
    const sections = context.document.sections;
    sections.load("items");
    await context.sync();
    sections.items[sections.items.length - 1].pageSetup.orientation = Word.PageOrientation.portrait;
    await context.sync();
    showStatus("✅ Đã chuyển về trang hướng Dọc (Portrait)!");
  });
}// 1. XÓA DẤU VẾT AI & WEB + CHUẨN HÓA MARKDOWN CƠ BẢN
async function cleanAiAndWebTraces(context, doc, targetFont, targetSize) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items");
  await context.sync();

  const batchSize = 40;
  for (let i = 0; i < paragraphs.items.length; i += batchSize) {
    const chunk = paragraphs.items.slice(i, i + batchSize);
    for (const p of chunk) {
      try {
        p.font.highlightColor = null;
        p.font.color = "#000000";
        p.font.name = targetFont;
        p.font.size = targetSize;
      } catch (e) {}
    }
    await context.sync();
  }

  const markdownPatterns = [
    { search: "**", replace: "" },
    { search: "__", replace: "" },
    { search: "`", replace: "" }
  ];

  for (const item of markdownPatterns) {
    const results = doc.body.search(item.search, { matchCase: false, matchWholeWord: false });
    results.load("items");
    await context.sync();
    for (const r of results.items) {
      r.insertText(item.replace, Word.InsertLocation.replace);
    }
    await context.sync();
  }
}

// 2. CĂN CHỈNH & CO DÃN ẢNH + BẢNG VỪA VÙNG AN TOÀN (15.5 cm dọc / 24.5 cm ngang)
async function fitImagesAndTablesSafe(context, doc) {
  const MAX_PORTRAIT_PT = 15.5 * 28.3465;

  try {
    const inlinePics = doc.body.inlinePictures;
    inlinePics.load("items, width, height");
    await context.sync();

    for (const pic of inlinePics.items) {
      if (pic.width > MAX_PORTRAIT_PT) {
        const ratio = pic.height && pic.width ? pic.height / pic.width : 0.65;
        pic.width = MAX_PORTRAIT_PT;
        pic.height = Math.round(MAX_PORTRAIT_PT * ratio);
      }
    }
    await context.sync();
  } catch (e) {}

  try {
    const tables = doc.body.tables;
    tables.load("items, width");
    await context.sync();

    for (const tbl of tables.items) {
      if (tbl.width > MAX_PORTRAIT_PT) {
        tbl.width = Math.min(tbl.width, MAX_PORTRAIT_PT);
      }
    }
    await context.sync();
  } catch (e) {}
}

// 3. TỰ ĐỘNG SINH CHÚ THÍCH (Hình X.Y / Bảng X.Y) CHO MỤC CHƯA CÓ TÊN
async function autoGenerateCaptions(context, doc) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items, text");
  await context.sync();

  let chapterNum = 1;
  let figIndex = 0;
  let tblIndex = 0;

  for (let i = 0; i < paragraphs.items.length; i++) {
    const p = paragraphs.items[i];
    const txt = (p.text || "").trim();

    const chapMatch = txt.match(/^(CHƯƠNG|CHUONG|CHAPTER)\s+(\d+)/i);
    if (chapMatch) {
      chapterNum = parseInt(chapMatch[2], 10) || chapterNum;
      figIndex = 0;
      tblIndex = 0;
    }

    if (/^(Hình|Bảng)\s*:/i.test(txt)) {
      if (/^Hình/i.test(txt)) {
        figIndex += 1;
        p.insertText(`Hình ${chapterNum}.${figIndex}`, Word.InsertLocation.start);
      } else {
        tblIndex += 1;
        p.insertText(`Bảng ${chapterNum}.${tblIndex}`, Word.InsertLocation.start);
      }
    }
  }
  await context.sync();
}

// 4. ĐÁNH SỐ TRANG LA MÃ (i, ii, iii...) CHO CÁC TRANG ĐẦU TRƯỚC CHƯƠNG 1
async function applyRomanHeaderFooterBeforeChapter1(context, doc) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items, text");
  await context.sync();

  let chapter1Index = -1;
  for (let i = 0; i < paragraphs.items.length; i++) {
    const t = (paragraphs.items[i].text || "").trim();
    if (/^(CHƯƠNG|CHUONG|CHAPTER)\s+1\b/i.test(t)) {
      chapter1Index = i;
      break;
    }
  }

  if (chapter1Index > 0) {
    try {
      paragraphs.items[chapter1Index].insertBreak(Word.BreakType.next, Word.InsertLocation.before);
      await context.sync();
    } catch (e) {}
  }

  try {
    const firstSection = doc.sections.getFirst();
    const footer = firstSection.getFooter(Word.HeaderFooterType.primary);
    const ooxmlRomanPage =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:pkg xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      '<w:part><w:xmlData><w:p><w:pPr><w:jc w:val="center"/></w:pPr>' +
      '<w:fldSimple w:instr="PAGE \\* roman"/>' +
      '</w:p></w:xmlData></w:part></w:pkg>';
    footer.insertOoxml(ooxmlRomanPage, Word.InsertLocation.end);
    await context.sync();
  } catch (e) {}
}
// V2.1 - 1. ÁP DỤNG CỠ CHỮ RIÊNG CHO HEADING 1-3 & ĐỊNH DẠNG CHÚ THÍCH BẢNG/HÌNH
async function applyHeadingAndCaptionSizes(context, doc, targetFont, hSizes, boldLabel, italicDesc) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items, text, style");
  await context.sync();

  const batchSize = 40;
  for (let i = 0; i < paragraphs.items.length; i += batchSize) {
    const chunk = paragraphs.items.slice(i, i + batchSize);
    for (const p of chunk) {
      try {
        const st = (p.style || "").toLowerCase();
        const txt = (p.text || "").trim();

        if (st.includes("heading 1") || /^(CHƯƠNG|CHUONG|CHAPTER)\s+\d+/i.test(txt)) {
          p.font.name = targetFont;
          p.font.size = hSizes.h1;
          p.font.bold = true;
        } else if (st.includes("heading 2") || /^\d+\.\d+\.?\s+\S+/.test(txt)) {
          p.font.name = targetFont;
          p.font.size = hSizes.h2;
          p.font.bold = true;
        } else if (st.includes("heading 3") || /^\d+\.\d+\.\d+\.?\s+\S+/.test(txt)) {
          p.font.name = targetFont;
          p.font.size = hSizes.h3;
          p.font.bold = true;
        } else if (/^(Bảng|Hình|Figure|Table)\s+\d+(\.\d+)?\s*[:.]/i.test(txt)) {
          p.font.name = targetFont;
          p.font.size = hSizes.cap;
          if (italicDesc) p.font.italic = true;

          if (boldLabel) {
            const match = txt.match(/^(Bảng|Hình|Figure|Table)\s+\d+(\.\d+)?\s*[:.]?/i);
            if (match) {
              const found = p.search(match[0], { matchCase: false });
              found.load("items");
              await context.sync();
              if (found.items.length > 0) {
                found.items[0].font.bold = true;
                found.items[0].font.italic = false;
              }
            }
          }
        }
      } catch (e) {}
    }
    await context.sync();
  }
}

// V2.1 - 2. CO DÃN ẢNH/BẢNG THEO HƯỚNG TRANG (15.5 CM DỌC / 24.5 CM NGANG)
async function fitLandscapeAwareMedia(context, doc) {
  const MAX_PORTRAIT_PT = 15.5 * 28.3465;
  const MAX_LANDSCAPE_PT = 24.5 * 28.3465;

  let isLandscapeDoc = false;
  try {
    const sec = doc.sections.getFirst();
    sec.body.load("pageSetup");
    await context.sync();
    if (sec.body.pageSetup && sec.body.pageSetup.orientation === Word.PageOrientation.landscape) {
      isLandscapeDoc = true;
    }
  } catch (e) {}

  const limitPt = isLandscapeDoc ? MAX_LANDSCAPE_PT : MAX_PORTRAIT_PT;

  try {
    const tables = doc.body.tables;
    tables.load("items, width");
    await context.sync();
    for (const tbl of tables.items) {
      const targetMax = tbl.width > (16.5 * 28.3465) ? MAX_LANDSCAPE_PT : limitPt;
      if (tbl.width > targetMax) {
        tbl.width = targetMax;
      }
    }
    await context.sync();
  } catch (e) {}
}

// V2.1 - 3. CHUẨN HÓA TÀI LIỆU THAM KHẢO (HANGING INDENT 1.27 CM)
async function formatReferencesHangingIndent(context, doc) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items, text");
  await context.sync();

  let inRefSection = false;
  for (let i = 0; i < paragraphs.items.length; i++) {
    const p = paragraphs.items[i];
    const txt = (p.text || "").trim();

    if (/^(TÀI LIỆU THAM KHẢO|DANH MỤC TÀI LIỆU THAM KHẢO|REFERENCES)/i.test(txt)) {
      inRefSection = true;
      continue;
    }
    if (inRefSection && /^(PHỤ LỤC|APPENDIX)/i.test(txt)) {
      break;
    }

    if (inRefSection && txt.length > 10) {
      try {
        p.leftIndent = 36;
        p.firstLineIndent = -36;
        p.alignment = Word.Alignment.justified;
      } catch (e) {}
    }
  }
  await context.sync();
}

// V2.1 - 4. TỰ ĐỘNG TẠO / CẬP NHẬT MỤC LỤC (TOC 4 CẤP) QUA OOXML AN TOÀN CHO WORD MAC
async function insertOrUpdateAcademicToc(context, doc) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items, text");
  await context.sync();

  let tocAnchorIndex = -1;
  let alreadyHasToc = false;

  for (let i = 0; i < paragraphs.items.length; i++) {
    const t = (paragraphs.items[i].text || "").trim();
    if (/^MỤC LỤC$/i.test(t)) {
      tocAnchorIndex = i;
      if (i + 1 < paragraphs.items.length && paragraphs.items[i + 1].text.includes("\t")) {
        alreadyHasToc = true;
      }
      break;
    }
  }

  if (tocAnchorIndex !== -1 && !alreadyHasToc) {
    try {
      const tocOoxml =
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
        '<w:pkg xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
        '<w:part><w:xmlData><w:p>' +
        '<w:fldSimple w:instr="TOC \\o &quot;1-4&quot; \\h \\z \\u"/>' +
        '</w:p></w:xmlData></w:part></w:pkg>';
      paragraphs.items[tocAnchorIndex].insertOoxml(tocOoxml, Word.InsertLocation.after);
      await context.sync();
    } catch (e) {}
  }
}

// V2.1 - 5. KIỂM TRA THỨ TỰ PHẦN ĐẦU LUẬN VĂN
async function checkFrontMatterOrderNotice(context, doc) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items, text");
  await context.sync();

  const orderKeys = [
    { key: "LỜI CAM ĐOAN", pos: -1 },
    { key: "LỜI CẢM ƠN", pos: -1 },
    { key: "TÓM TẮT", pos: -1 },
    { key: "MỤC LỤC", pos: -1 },
    { key: "DANH MỤC", pos: -1 },
    { key: "LỜI MỞ ĐẦU", pos: -1 }
  ];

  for (let i = 0; i < Math.min(paragraphs.items.length, 150); i++) {
    const t = (paragraphs.items[i].text || "").trim().toUpperCase();
    for (const item of orderKeys) {
      if (item.pos === -1 && t.startsWith(item.key)) {
        item.pos = i;
      }
    }
  }

  const found = orderKeys.filter(x => x.pos !== -1);
  for (let i = 1; i < found.length; i++) {
    if (found[i].pos < found[i - 1].pos) {
      const statusEl = document.getElementById("status") || document.querySelector(".status-bar");
      if (statusEl) {
        statusEl.textContent = `⚠️ Gợi ý thứ tự phần đầu: "${found[i].key}" nên đặt sau "${found[i - 1].key}".`;
      }
      break;
    }
  }
}

// V2.2 - 1. CHUẨN HÓA TRÍCH DẪN (APA / IEEE / TCVN / GB-T / MLA) & TOC 3-4 CẤP
async function applyCitationAndTocV22(context, doc, styleKey, tocDepth, cleanQuotes) {
  const paragraphs = doc.body.paragraphs;
  paragraphs.load("items, text");
  await context.sync();

  for (let i = 0; i < paragraphs.items.length; i++) {
    const t = (paragraphs.items[i].text || "").trim();
    if (/^MỤC LỤC$/i.test(t) && tocDepth === "1-3") {
      try {
        const toc3Ooxml =
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<w:pkg xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
          '<w:part><w:xmlData><w:p>' +
          '<w:fldSimple w:instr="TOC \\o &quot;1-3&quot; \\h \\z \\u"/>' +
          '</w:p></w:xmlData></w:part></w:pkg>';
        paragraphs.items[i].insertOoxml(toc3Ooxml, Word.InsertLocation.after);
      } catch (e) {}
      break;
    }
  }
  await context.sync();

  let inRef = false;
  const isNumberedStyle = (styleKey === "ieee" || styleKey === "tcvn7892" || styleKey === "gbt7714");

  for (let i = 0; i < paragraphs.items.length; i++) {
    const p = paragraphs.items[i];
    const txt = (p.text || "").trim();

    if (/^(TÀI LIỆU THAM KHẢO|DANH MỤC TÀI LIỆU THAM KHẢO|REFERENCES)/i.test(txt)) {
      inRef = true;
      continue;
    }
    if (inRef && /^(PHỤ LỤC|APPENDIX)/i.test(txt)) break;

    if (inRef && txt.length > 8) {
      try {
        p.leftIndent = isNumberedStyle ? 24 : 36;
        p.firstLineIndent = isNumberedStyle ? -24 : -36;
        p.alignment = Word.Alignment.justified;

        if (cleanQuotes && (txt.includes('"') || txt.includes("“") || txt.includes("”"))) {
          const cleaned = txt.replace(/[“”"]/g, "");
          p.insertText(cleaned, Word.InsertLocation.replace);
        }
      } catch (e) {}
    }
  }
  await context.sync();
}

// V2.2 - 2. ĐÁNH SỐ TRANG 4 VỊ TRÍ QUA OOXML AN TOÀN CHO WORD MAC / LTSC
async function applyPageNumberPositionOOXML(context, doc, posKey) {
  const isTop = posKey.startsWith("top");
  const alignVal = posKey.endsWith("right") ? "right" : "center";

  const pageFieldOoxml =
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<w:pkg xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
    `<w:part><w:xmlData><w:p><w:pPr><w:jc w:val="${alignVal}"/></w:pPr>` +
    '<w:fldSimple w:instr="PAGE"/>' +
    '</w:p></w:xmlData></w:part></w:pkg>';

  try {
    const sections = doc.sections;
    sections.load("items");
    await context.sync();

    for (let i = 0; i < sections.items.length; i++) {
      const sec = sections.items[i];
      const targetArea = isTop
        ? sec.getHeader(Word.HeaderFooterType.primary)
        : sec.getFooter(Word.HeaderFooterType.primary);
      targetArea.insertOoxml(pageFieldOoxml, Word.InsertLocation.end);
    }
    await context.sync();
  } catch (e) {}
}

// =========================================================================
// BỔ SUNG: HEADING 4 & CHÈN BÌA CHÍNH + PHỤ BÌA UFM (TÁCH SECTION KHÔNG SỐ TRANG)
// =========================================================================
async function applyHeadingQuick(level) {
  try {
    await Word.run(async (context) => {
      const sel = context.document.getSelection();
      const paras = sel.paragraphs;
      paras.load("items");
      await context.sync();

      const fontName = document.getElementById("fontFamily")?.value || document.getElementById("fontSelect")?.value || "Times New Roman";

      for (const p of paras.items) {
        p.style = `Heading ${level}`;
        p.font.name = fontName;
        if (level === 1 || level === 2) {
          p.font.size = 14;
          p.font.bold = true;
          p.font.italic = false;
        } else if (level === 3) {
          p.font.size = 13;
          p.font.bold = true;
          p.font.italic = true;
        } else if (level === 4) {
          p.font.size = 13;
          p.font.bold = false;
          p.font.italic = true;
        }
      }
      await context.sync();
      if (typeof showStatus === "function") {
        showStatus(`✅ Đã gán Heading ${level} cho vùng chọn!`);
      }
    });
  } catch (err) {
    if (typeof showStatus === "function") {
      showStatus("❌ Lỗi gán Heading: " + err.message, 4000);
    }
  }
}

async function insertUfmCovers() {
  const escXml = (s) => (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const author = escXml((document.getElementById("ufmAuthor")?.value || "HỌ VÀ TÊN TÁC GIẢ").toUpperCase());
  const title = escXml((document.getElementById("ufmTitle")?.value || "TÊN ĐỀ TÀI LUẬN VĂN / ĐỀ ÁN").toUpperCase());
  const docType = escXml((document.getElementById("ufmDocType")?.value || "LUẬN VĂN THẠC SĨ").toUpperCase());
  const major = escXml(document.getElementById("ufmMajor")?.value || "Tài chính - Ngân hàng");
  const track = escXml(document.getElementById("ufmTrack")?.value || "Định hướng ứng dụng");
  const majorCode = escXml(document.getElementById("ufmMajorCode")?.value || "8340201");
  const advisor = escXml(document.getElementById("ufmAdvisor")?.value || "Ghi học hàm, học vị, họ tên đầy đủ của người hướng dẫn");
  const year = escXml(document.getElementById("ufmYear")?.value || "2026");

  const makeBoxedCoverXml = (isSubCover) => {
    const subMiddleXml = isSubCover
      ? `<w:p><w:pPr><w:ind w:left="2200"/><w:spacing w:before="360" w:after="60" w:line="320" w:lineRule="auto"/></w:pPr>` +
        `<w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="26"/></w:rPr><w:t>Ngành đào tạo: ${major}</w:t></w:r></w:p>` +
        `<w:p><w:pPr><w:ind w:left="2200"/><w:spacing w:before="0" w:after="60" w:line="320" w:lineRule="auto"/></w:pPr>` +
        `<w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="26"/></w:rPr><w:t>${track}</w:t></w:r></w:p>` +
        `<w:p><w:pPr><w:ind w:left="2200"/><w:spacing w:before="0" w:after="360" w:line="320" w:lineRule="auto"/></w:pPr>` +
        `<w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="26"/></w:rPr><w:t>Mã ngành: ${majorCode}</w:t></w:r></w:p>`
      : `<w:p><w:pPr><w:spacing w:before="600" w:after="600"/></w:pPr></w:p>`;

    const advisorXml = isSubCover
      ? `<w:p><w:pPr><w:ind w:left="360"/><w:spacing w:before="480" w:after="60"/></w:pPr>` +
        `<w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="28"/></w:rPr><w:t>NGƯỜI HƯỚNG DẪN KHOA HỌC</w:t></w:r></w:p>` +
        `<w:p><w:pPr><w:ind w:left="360"/><w:spacing w:before="0" w:after="720"/></w:pPr>` +
        `<w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="28"/></w:rPr><w:t>${advisor}</w:t></w:r></w:p>`
      : `<w:p><w:pPr><w:spacing w:before="720" w:after="720"/></w:pPr></w:p>`;

    return (
      `<w:tbl>` +
      `<w:tblPr>` +
      `<w:tblW w:w="9000" w:type="dxa"/>` +
      `<w:jc w:val="center"/>` +
      `<w:tblBorders>` +
      `<w:top w:val="thinThickMediumGap" w:sz="24" w:space="0" w:color="000000"/>` +
      `<w:left w:val="thinThickMediumGap" w:sz="24" w:space="0" w:color="000000"/>` +
      `<w:bottom w:val="thickThinMediumGap" w:sz="24" w


