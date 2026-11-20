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
  document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  const target = document.getElementById("tab-" + tabId);
  if (target) target.classList.add("active");
  if (btn) btn.classList.add("active");
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

function showBoxStatus(boxId, message, isError = false) {
  const el = document.getElementById(boxId);
  if (el) {
    el.style.display = "block";
    el.style.background = isError ? "#fef2f2" : "#ecfdf5";
    el.style.color = isError ? "#b91c1c" : "#047857";
    el.style.border = isError ? "1px solid #fecaca" : "1px solid #a7f3d0";
    el.textContent = message;
  } else {
    showStatus(message, 5000);
  }
}

function selectPreset(key) {
  const sel = document.getElementById("presetSelect");
  if (sel) sel.value = key;
  document.querySelectorAll(".chip").forEach((c) => {
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
  document.querySelectorAll(".chip").forEach((c) => {
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

function getActiveFontAndSize() {
  return {
    font: document.getElementById("fontFamily")?.value || document.getElementById("fontSelect")?.value || "Times New Roman",
    size: parseFloat(document.getElementById("fontSize")?.value || document.getElementById("fontSizeInput")?.value) || 13
  };
}

// =========================================================================
// BẢO VỆ SECTION BÌA & MỤC LỤC (BẤM THỨ TỰ NÀO CŨNG KHÔNG HỎNG)
// =========================================================================
async function getContentStartSectionIndex(context, doc) {
  const sections = doc.sections;
  sections.load("items");
  await context.sync();

  if (sections.items.length <= 1) return 0;

  const firstSecBody = sections.items[0].body;
  firstSecBody.load("text");
  await context.sync();

  const upper = (firstSecBody.text || "").toUpperCase();
  const looksLikeCover =
    upper.includes("BỘ TÀI CHÍNH") ||
    upper.includes("TRƯỜNG ĐẠI HỌC TÀI CHÍNH") ||
    upper.includes("LUẬN VĂN THẠC SĨ") ||
    upper.includes("ĐỀ ÁN TỐT NGHIỆP") ||
    upper.includes("KHÓA LUẬN TỐT NGHIỆP");
  const hasBodyContent = upper.includes("CHƯƠNG 1") || upper.includes("MỤC LỤC");

  return (looksLikeCover && !hasBodyContent) ? 1 : 0;
}

async function loadContentParagraphs(context, doc, props = "items,text,style,styleBuiltIn") {
  const startIdx = await getContentStartSectionIndex(context, doc);
  const sections = doc.sections;
  sections.load("items");
  await context.sync();

  const paraCollections = [];
  for (let i = startIdx; i < sections.items.length; i++) {
    const pCol = sections.items[i].body.paragraphs;
    pCol.load(props);
    paraCollections.push(pCol);
  }
  await context.sync();

  const paragraphs = [];
  for (const col of paraCollections) {
    for (const p of col.items) {
      paragraphs.push(p);
    }
  }
  return { paragraphs, sections: sections.items, startIdx };
}

function isTocParagraph(p) {
  const builtIn = (p.styleBuiltIn ? p.styleBuiltIn.toString() : "").toLowerCase();
  const styleName = (p.style ? p.style.toString() : "").toLowerCase();
  const txt = (p.text || "").trim();
  if (builtIn.includes("toc")) return true;
  if (styleName.includes("toc") || styleName.includes("mục lục") || styleName.includes("table of contents")) return true;
  if (/\t\s*(\d+|[ivxlcdm]+)\s*$/i.test(txt)) return true;
  return false;
}

function isHeadingParagraph(p) {
  const builtIn = (p.styleBuiltIn ? p.styleBuiltIn.toString() : "").toLowerCase();
  const styleName = (p.style ? p.style.toString() : "").toLowerCase();
  return builtIn.startsWith("heading") || styleName.startsWith("heading");
}

// =========================================================================
// CHUẨN HÓA TÀI LIỆU CHÍNH
// =========================================================================
async function applySelectedStandard() {
  try {
    showStatus("⏳ Đang chuẩn hóa văn bản...", 0);

    if (document.getElementById("optAutoClean")?.checked) {
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

      const { paragraphs, sections } = await loadContentParagraphs(
        context,
        context.document,
        "items,text,style,styleBuiltIn"
      );

      sections.forEach((sec) => {
        sec.pageSetup.paperSize = Word.PaperSize.a4;
        sec.pageSetup.topMargin = cmToPt(mTop);
        sec.pageSetup.bottomMargin = cmToPt(mBottom);
        sec.pageSetup.leftMargin = cmToPt(mLeft);
        sec.pageSetup.rightMargin = cmToPt(mRight);
      });

      paragraphs.forEach((p) => {
        p.font.name = fontFamily;
        if (isHeadingParagraph(p) || isTocParagraph(p)) return;
        p.font.size = fontSize;
        p.lineSpacing = fontSize * lineMult;
        p.spaceBefore = before;
        p.spaceAfter = after;
        p.firstLineIndent = cmToPt(indent);
        p.alignment = align === "Justified" ? Word.Alignment.justified : Word.Alignment.left;
      });

      await context.sync();
    });

    if (document.getElementById("optPageNumber")?.checked) {
      await applyPageNumbersOnly(true);
    }

    await Word.run(async (context) => {
      const doc = context.document;
      const { font: activeFont, size: activeSize } = getActiveFontAndSize();

      const optCleanAiWeb = document.getElementById("optCleanAiWeb")?.checked;
      const optRomanPages = document.getElementById("optRomanPages")?.checked;
      const optAutoCaption = document.getElementById("optAutoCaption")?.checked;
      const optFitMedia = document.getElementById("optFitMedia")?.checked;

      if (optCleanAiWeb) await cleanAiAndWebTraces(context, doc, activeFont, activeSize);
      if (optFitMedia) await fitImagesAndTablesSafe(context, doc);
      if (optAutoCaption) await autoGenerateCaptions(context, doc);
      if (optRomanPages) await applyRomanHeaderFooterBeforeChapter1(context, doc);

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

      if (optKeepLandscape) await fitLandscapeAwareMedia(context, doc);
      if (optRefHanging) await formatReferencesHangingIndent(context, doc);
      if (optAutoToc) await insertOrUpdateAcademicToc(context, doc);
      if (optCheckFrontOrder) await checkFrontMatterOrderNotice(context, doc);

      const citationStyle = document.getElementById("citationStyleSelect")?.value || "apa7";
      const tocDepth = document.getElementById("tocDepthSelect")?.value || "1-4";
      const pagePosV22 = document.getElementById("pagePosV22")?.value || "keep";
      const optCleanRefQuotes = document.getElementById("optCleanRefQuotes")?.checked;

      await applyCitationAndTocV22(context, doc, citationStyle, tocDepth, optCleanRefQuotes);
      if (pagePosV22 !== "keep") {
        await applyPageNumberPositionOOXML(context, doc, pagePosV22);
      }

      await context.sync();
    });

    showStatus("✅ Đã chuẩn hóa tài liệu hoàn tất!");
  } catch (err) {
    showStatus("❌ Lỗi [v3.2 - dòng " + (err.line || "?") + "]: " + err.message, 10000);
  }
}

// =========================================================================
// ĐÁNH SỐ TRANG
// =========================================================================
async function applyPageNumbersOnly(silent = false) {
  await Word.run(async (context) => {
    const pos = document.getElementById("pageNumPos").value;
    const fontFamily = document.getElementById("fontFamily").value;
    const presetKey = document.getElementById("presetSelect").value;
    const hideFirst = presetKey === "apa7" ? false : true;

    const sections = context.document.sections;
    sections.load("items");
    const tables = context.document.body.tables;
    tables.load("items");
    await context.sync();

    let hasUfmCover = false;
    if (tables.items.length > 0) {
      const firstCellText = tables.items[0].getCell(0, 0).body;
      firstCellText.load("text");
      await context.sync();
      hasUfmCover = (firstCellText.text || "").toUpperCase().includes("BỘ TÀI CHÍNH");
    }

    const startIdx = (hasUfmCover && sections.items.length > 1) ? 1 : 0;

    if (hasUfmCover && sections.items.length > 0) {
      const coverSec = sections.items[0];
      coverSec.getHeader(Word.HeaderFooterType.primary).clear();
      coverSec.getFooter(Word.HeaderFooterType.primary).clear();
      coverSec.getHeader(Word.HeaderFooterType.firstPage).clear();
      coverSec.getFooter(Word.HeaderFooterType.firstPage).clear();
    }

    for (let i = startIdx; i < sections.items.length; i++) {
      const sec = sections.items[i];
      sec.pageSetup.differentFirstPageHeaderFooter = (i === 0) ? hideFirst : false;

      const header = sec.getHeader(Word.HeaderFooterType.primary);
      const footer = sec.getFooter(Word.HeaderFooterType.primary);
      if (i > 0) {
        try { header.isLinkedToPrevious = false; } catch (e) {}
        try { footer.isLinkedToPrevious = false; } catch (e) {}
      }
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
        const pageOoxml = '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"><pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml"><pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships></pkg:xmlData></pkg:part><pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"><pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:fldSimple w:instr="PAGE"/></w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>';
        p.insertOoxml(pageOoxml, Word.InsertLocation.end);
      }
    }

    await context.sync();
    if (!silent) showStatus("✅ Đã cập nhật đánh số trang (ẩn số trang ở 2 trang bìa)!");
  });
}

// =========================================================================
// TAB DỌN DẸP
// =========================================================================
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

// =========================================================================
// HEADING & XOAY HƯỚNG GIẤY
// =========================================================================
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

async function applyHeadingQuick(level) {
  try {
    await Word.run(async (context) => {
      const sel = context.document.getSelection();
      const paras = sel.paragraphs;
      paras.load("items");
      await context.sync();

      const { font: fontName } = getActiveFontAndSize();

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
      showStatus(`✅ Đã gán Heading ${level} cho vùng chọn!`);
    });
  } catch (err) {
    showStatus("❌ Lỗi gán Heading: " + err.message, 4000);
  }
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
}

// =========================================================================
// V2.0 - NÂNG CAO & TỰ ĐỘNG HÓA
// =========================================================================
async function cleanAiAndWebTraces(context, doc, targetFont, targetSize) {
  const { paragraphs } = await loadContentParagraphs(context, doc, "items,text,style,styleBuiltIn");

  const batchSize = 40;
  for (let i = 0; i < paragraphs.length; i += batchSize) {
    const chunk = paragraphs.slice(i, i + batchSize);
    for (const p of chunk) {
      if (isTocParagraph(p)) continue;
      try {
        p.font.highlightColor = null;
        p.font.color = "#000000";
        p.font.name = targetFont;
        if (!isHeadingParagraph(p)) {
          p.font.size = targetSize;
        }
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

async function autoGenerateCaptions(context, doc) {
  const { paragraphs } = await loadContentParagraphs(context, doc, "items,text,style,styleBuiltIn");

  let chapterNum = 1;
  let figIndex = 0;
  let tblIndex = 0;

  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    if (isTocParagraph(p)) continue;
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
      paragraphs.items[chapter1Index].insertBreak(Word.BreakType.sectionNext, Word.InsertLocation.before);
      await context.sync();
    } catch (e) {}
  }

  try {
    const startIdx = await getContentStartSectionIndex(context, doc);
    const sections = doc.sections;
    sections.load("items");
    await context.sync();
    const targetSec = sections.items[startIdx] || sections.items[0];
    const footer = targetSec.getFooter(Word.HeaderFooterType.primary);
    const ooxmlRomanPage =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' +
      '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
      '<pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
      '</Relationships></pkg:xmlData></pkg:part>' +
      '<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">' +
      '<pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' +
      '<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:fldSimple w:instr="PAGE \\* roman"/></w:p>' +
      '</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>';
    footer.insertOoxml(ooxmlRomanPage, Word.InsertLocation.end);
    await context.sync();
  } catch (e) {}
}

// =========================================================================
// V2.1 - CỠ CHỮ ĐỀ MỤC & HỌC THUẬT
// =========================================================================
async function applyHeadingAndCaptionSizes(context, doc, targetFont, hSizes, boldLabel, italicDesc) {
  const { paragraphs } = await loadContentParagraphs(context, doc, "items,text,style,styleBuiltIn");

  const batchSize = 40;
  for (let i = 0; i < paragraphs.length; i += batchSize) {
    const chunk = paragraphs.slice(i, i + batchSize);
    for (const p of chunk) {
      if (isTocParagraph(p)) continue;
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

async function formatReferencesHangingIndent(context, doc) {
  const { paragraphs } = await loadContentParagraphs(context, doc, "items,text,style,styleBuiltIn");

  let inRefSection = false;
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    const txt = (p.text || "").trim();

    if (/^(TÀI LIỆU THAM KHẢO|DANH MỤC TÀI LIỆU THAM KHẢO|REFERENCES)/i.test(txt)) {
      inRefSection = true;
      continue;
    }
    if (inRefSection && /^(PHỤ LỤC|APPENDIX)/i.test(txt)) break;

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
        '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' +
        '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
        '<pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
        '</Relationships></pkg:xmlData></pkg:part>' +
        '<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">' +
        '<pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' +
        '<w:p><w:fldSimple w:instr="TOC \\o &quot;1-4&quot; \\h \\z \\u"/></w:p>' +
        '</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>';
      paragraphs.items[tocAnchorIndex].insertOoxml(tocOoxml, Word.InsertLocation.after);
      await context.sync();
    } catch (e) {}
  }
}

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

  const found = orderKeys.filter((x) => x.pos !== -1);
  for (let i = 1; i < found.length; i++) {
    if (found[i].pos < found[i - 1].pos) {
      showStatus(`⚠️ Gợi ý thứ tự phần đầu: "${found[i].key}" nên đặt sau "${found[i - 1].key}".`, 6000);
      break;
    }
  }
}

// =========================================================================
// V2.2 - TRÍCH DẪN, TOC & VỊ TRÍ SỐ TRANG
// =========================================================================
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
          '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' +
          '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
          '<pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
          '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
          '</Relationships></pkg:xmlData></pkg:part>' +
          '<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">' +
          '<pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' +
          '<w:p><w:fldSimple w:instr="TOC \\o &quot;1-3&quot; \\h \\z \\u"/></w:p>' +
          '</w:body></w:document></pkg:xmlData></pkg:part></pkg:package>';
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

async function applyPageNumberPositionOOXML(context, doc, posKey) {
  const isTop = posKey.startsWith("top");
  const alignVal = posKey.endsWith("right") ? "right" : "center";

  const pageFieldOoxml =
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' +
    '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
    '<pkg:xmlData><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
    '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
    '</Relationships></pkg:xmlData></pkg:part>' +
    '<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">' +
    '<pkg:xmlData><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' +
    `<w:p><w:pPr><w:jc w:val="${alignVal}"/></w:pPr>` +
    '<w:fldSimple w:instr="PAGE"/>' +
    '</w:p></w:body></w:document></pkg:xmlData></pkg:part></pkg:package>';

  try {
    const startSecIdx = await getContentStartSectionIndex(context, doc);
    const sections = doc.sections;
    sections.load("items");
    await context.sync();

    if (startSecIdx > 0) {
      const coverSec = sections.items[0];
      coverSec.getHeader(Word.HeaderFooterType.primary).clear();
      coverSec.getFooter(Word.HeaderFooterType.primary).clear();
    }

    for (let i = startSecIdx; i < sections.items.length; i++) {
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
// 3 NÚT BẤM RIÊNG (NÂNG CAO / V2.1 / V2.2)
// =========================================================================
async function runAdvancedOnly() {
  try {
    const optCleanAiWeb = document.getElementById("optCleanAiWeb")?.checked;
    const optRomanPages = document.getElementById("optRomanPages")?.checked;
    const optAutoCaption = document.getElementById("optAutoCaption")?.checked;
    const optFitMedia = document.getElementById("optFitMedia")?.checked;

    if (!optCleanAiWeb && !optRomanPages && !optAutoCaption && !optFitMedia) {
      showBoxStatus("statusAdv", "⚠️ Hãy tick ít nhất 1 mục trong Nâng cao & Tự động hóa trước khi bấm.", true);
      return;
    }

    const { font: activeFont, size: activeSize } = getActiveFontAndSize();
    showBoxStatus("statusAdv", "⏳ Đang xử lý Nâng cao & Tự động hóa...");

    await Word.run(async (context) => {
      const doc = context.document;
      if (optCleanAiWeb) await cleanAiAndWebTraces(context, doc, activeFont, activeSize);
      if (optFitMedia) await fitImagesAndTablesSafe(context, doc);
      if (optAutoCaption) await autoGenerateCaptions(context, doc);
      if (optRomanPages) await applyRomanHeaderFooterBeforeChapter1(context, doc);
      await context.sync();
    });

    showBoxStatus("statusAdv", "✅ Đã chạy xong Nâng cao & Tự động hóa!");
  } catch (err) {
    showBoxStatus("statusAdv", "❌ Lỗi (dòng " + (err.line || "?") + "): " + err.message, true);
  }
}

async function runAcademicV21Only() {
  try {
    const optAutoToc = document.getElementById("optAutoToc")?.checked;
    const optKeepLandscape = document.getElementById("optKeepLandscape")?.checked;
    const optBoldCaptionLabel = document.getElementById("optBoldCaptionLabel")?.checked;
    const optItalicCaptionDesc = document.getElementById("optItalicCaptionDesc")?.checked;
    const optRefHanging = document.getElementById("optRefHanging")?.checked;
    const optCheckFrontOrder = document.getElementById("optCheckFrontOrder")?.checked;

    const { font: activeFont } = getActiveFontAndSize();
    const hSizes = {
      h1: parseFloat(document.getElementById("sizeH1")?.value) || 14,
      h2: parseFloat(document.getElementById("sizeH2")?.value) || 14,
      h3: parseFloat(document.getElementById("sizeH3")?.value) || 13,
      cap: parseFloat(document.getElementById("sizeCaption")?.value) || 12
    };

    showBoxStatus("statusV21", "⏳ Đang áp dụng V2.1...");

    await Word.run(async (context) => {
      const doc = context.document;
      await applyHeadingAndCaptionSizes(context, doc, activeFont, hSizes, optBoldCaptionLabel, optItalicCaptionDesc);
      if (optKeepLandscape) await fitLandscapeAwareMedia(context, doc);
      if (optRefHanging) await formatReferencesHangingIndent(context, doc);
      if (optAutoToc) await insertOrUpdateAcademicToc(context, doc);
      if (optCheckFrontOrder) await checkFrontMatterOrderNotice(context, doc);
      await context.sync();
    });

    showBoxStatus("statusV21", "✅ Đã áp dụng Cỡ chữ Đề mục & Học thuật (V2.1)!");
  } catch (err) {
    showBoxStatus("statusV21", "❌ Lỗi V2.1 (dòng " + (err.line || "?") + "): " + err.message, true);
  }
}

async function runCitationV22Only() {
  try {
    const citationStyle = document.getElementById("citationStyleSelect")?.value || "apa7";
    const tocDepth = document.getElementById("tocDepthSelect")?.value || "1-4";
    const pagePosV22 = document.getElementById("pagePosV22")?.value || "keep";
    const optCleanRefQuotes = document.getElementById("optCleanRefQuotes")?.checked;

    showBoxStatus("statusV22", "⏳ Đang áp dụng V2.2...");

    await Word.run(async (context) => {
      const doc = context.document;
      await applyCitationAndTocV22(context, doc, citationStyle, tocDepth, optCleanRefQuotes);
      if (pagePosV22 !== "keep") {
        await applyPageNumberPositionOOXML(context, doc, pagePosV22);
      }
      await context.sync();
    });

    showBoxStatus("statusV22", "✅ Đã áp dụng Trích dẫn & Cấu trúc Mục lục (V2.2)!");
  } catch (err) {
    showBoxStatus("statusV22", "❌ Lỗi V2.2 (dòng " + (err.line || "?") + "): " + err.message, true);
  }
}

// =========================================================================
// CHÈN BÌA CHÍNH & PHỤ BÌA UFM (SĐH) - CHUẨN MẪU, TÁCH SECTION ẨN SỐ TRANG
// =========================================================================
async function insertUfmCovers() {
  try {
    const author = (document.getElementById("ufmAuthor")?.value || "HỌ VÀ TÊN TÁC GIẢ").trim().toUpperCase();
    const title = (document.getElementById("ufmTitle")?.value || "TÊN ĐỀ TÀI LUẬN VĂN").trim().toUpperCase();
    const docType = (document.getElementById("ufmDocType")?.value || "LUẬN VĂN THẠC SĨ").trim().toUpperCase();
    const major = (document.getElementById("ufmMajor")?.value || "Tài chính - Ngân hàng").trim();
    const track = (document.getElementById("ufmTrack")?.value || "").trim();
    const majorCode = (document.getElementById("ufmMajorCode")?.value || "8340201").trim();
    const advisor = (document.getElementById("ufmAdvisor")?.value || "........................................").trim();
    const year = (document.getElementById("ufmYear")?.value || "2026").trim();

    showBoxStatus("statusCover", "⏳ Đang chèn / cập nhật Bìa chính & Phụ bìa UFM...");

    const escapeXml = (str) =>
      String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

    const buildTableXml = (lines) => {
      const parasXml = lines
        .map((item) => {
          const szHalfPt = Math.round((item.size || 13) * 2);
          const beforeTwips = Math.round((item.before || 0) * 20);
          const afterTwips = Math.round((item.after !== undefined ? item.after : 6) * 20);
          const boldXml = item.bold ? "<w:b/><w:bCs/>" : "";
          const italicXml = item.italic ? "<w:i/><w:iCs/>" : "";
          return (
            `<w:p>` +
              `<w:pPr>` +
                `<w:spacing w:before="${beforeTwips}" w:after="${afterTwips}" w:line="312" w:lineRule="auto"/>` +
                `<w:ind w:left="0" w:right="0" w:firstLine="0"/>` +
                `<w:jc w:val="center"/>` +
              `</w:pPr>` +
              `<w:r>` +
                `<w:rPr>` +
                  `<w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>` +
                  `${boldXml}${italicXml}` +
                  `<w:color w:val="000000"/>` +
                  `<w:sz w:val="${szHalfPt}"/>` +
                  `<w:szCs w:val="${szHalfPt}"/>` +
                `</w:rPr>` +
                `<w:t xml:space="preserve">${escapeXml(item.text)}</w:t>` +
              `</w:r>` +
            `</w:p>`
          );
        })
        .join("");

      return (
        `<w:tbl>` +
          `<w:tblPr>` +
            `<w:tblW w:w="8600" w:type="dxa"/>` +
            `<w:jc w:val="center"/>` +
            `<w:tblBorders>` +
              `<w:top w:val="double" w:sz="12" w:space="0" w:color="000000"/>` +
              `<w:left w:val="double" w:sz="12" w:space="0" w:color="000000"/>` +
              `<w:bottom w:val="double" w:sz="12" w:space="0" w:color="000000"/>` +
              `<w:right w:val="double" w:sz="12" w:space="0" w:color="000000"/>` +
            `</w:tblBorders>` +
            `<w:tblLayout w:type="fixed"/>` +
            `<w:tblCellMar>` +
              `<w:top w:w="520" w:type="dxa"/>` +
              `<w:left w:w="300" w:type="dxa"/>` +
              `<w:bottom w:w="520" w:type="dxa"/>` +
              `<w:right w:w="300" w:type="dxa"/>` +
            `</w:tblCellMar>` +
          `</w:tblPr>` +
          `<w:tblGrid><w:gridCol w:w="8600"/></w:tblGrid>` +
          `<w:tr>` +
            `<w:trPr><w:cantSplit/></w:trPr>` +
            `<w:tc>` +
              `<w:tcPr><w:tcW w:w="8600" w:type="dxa"/></w:tcPr>` +
              parasXml +
            `</w:tc>` +
          `</w:tr>` +
        `</w:tbl>`
      );
    };

    const mainCoverLines = [
      { text: "BỘ TÀI CHÍNH", size: 13, bold: true, after: 6 },
      { text: "TRƯỜNG ĐẠI HỌC TÀI CHÍNH – MARKETING", size: 14, bold: true, after: 4 },
      { text: "──────────────────────", size: 11, bold: false, after: 64 },
      { text: author, size: 14, bold: true, after: 52 },
      { text: title, size: 17, bold: true, after: 64 },
      { text: docType, size: 14, bold: true, after: 150 },
      { text: "THÀNH PHỐ HỒ CHÍ MINH – NĂM " + year, size: 13, bold: true, after: 12 }
    ];

    const majorLine = track ? `Ngành: ${major} (${track})` : `Ngành: ${major}`;
    const subCoverLines = [
      { text: "BỘ TÀI CHÍNH", size: 13, bold: true, after: 6 },
      { text: "TRƯỜNG ĐẠI HỌC TÀI CHÍNH – MARKETING", size: 14, bold: true, after: 4 },
      { text: "──────────────────────", size: 11, bold: false, after: 44 },
      { text: author, size: 14, bold: true, after: 36 },
      { text: title, size: 16, bold: true, after: 36 },
      { text: docType, size: 14, bold: true, after: 24 },
      { text: majorLine, size: 13, bold: true, after: 6 },
      { text: "Mã số: " + majorCode, size: 13, bold: true, after: 40 },
      { text: "NGƯỜI HƯỚNG DẪN KHOA HỌC: " + advisor.toUpperCase(), size: 13, bold: true, after: 92 },
      { text: "THÀNH PHỐ HỒ CHÍ MINH – NĂM " + year, size: 13, bold: true, after: 12 }
    ];

    const fullCoversOoxml =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">' +
        '<pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">' +
          '<pkg:xmlData>' +
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
              '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
            '</Relationships>' +
          '</pkg:xmlData>' +
        '</pkg:part>' +
        '<pkg:part pkg:name="/word/document.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml">' +
          '<pkg:xmlData>' +
            '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
              '<w:body>' +
                buildTableXml(mainCoverLines) +
                '<w:p><w:r><w:br w:type="page"/></w:r></w:p>' +
                buildTableXml(subCoverLines) +
              '</w:body>' +
            '</w:document>' +
          '</pkg:xmlData>' +
        '</pkg:part>' +
      '</pkg:package>';

    let isUpdated = false;

    await Word.run(async (context) => {
      const doc = context.document;
      const body = doc.body;

      // Kiểm tra xem Section 0 đã là Section bìa UFM chưa
      const startIdx = await getContentStartSectionIndex(context, doc);
      const existingSections = doc.sections;
      existingSections.load("items");
      await context.sync();

      if (startIdx > 0 && existingSections.items.length > 1) {
        // ĐÃ CÓ BÌA -> Xóa nội dung cũ trong Section bìa và ghi đè thông tin mới
        isUpdated = true;
        const coverBody = existingSections.items[0].body;
        coverBody.clear();
        await context.sync();

        coverBody.insertOoxml(fullCoversOoxml, Word.InsertLocation.start);
        await context.sync();
      } else {
        // CHƯA CÓ BÌA -> Tạo Section riêng rồi chèn mới 2 trang bìa
        body.insertBreak(Word.BreakType.sectionNext, Word.InsertLocation.start);
        await context.sync();

        body.insertOoxml(fullCoversOoxml, Word.InsertLocation.start);
        await context.sync();
      }

      // Tải lại danh sách Section để ẩn số trang bìa và thu gọn dòng trống thừa cuối bìa
      const sections = doc.sections;
      sections.load("items");
      await context.sync();

      if (sections.items.length > 0) {
        const coverSec = sections.items[0];
        try {
          const lastP = coverSec.body.paragraphs.getLast();
          lastP.load("text");
          await context.sync();
          if ((lastP.text || "").trim() === "") {
            lastP.font.size = 2;
            lastP.spaceBefore = 0;
            lastP.spaceAfter = 0;
            await context.sync();
          }
        } catch (e) {}

        if (sections.items.length > 1) {
          try {
            sections.items[1].getHeader(Word.HeaderFooterType.primary).isLinkedToPrevious = false;
            sections.items[1].getFooter(Word.HeaderFooterType.primary).isLinkedToPrevious = false;
          } catch (e) {}
          await context.sync();
        }

        coverSec.getHeader(Word.HeaderFooterType.primary).clear();
        coverSec.getFooter(Word.HeaderFooterType.primary).clear();
        coverSec.getHeader(Word.HeaderFooterType.firstPage).clear();
        coverSec.getFooter(Word.HeaderFooterType.firstPage).clear();
        await context.sync();
      }
    });

    showBoxStatus(
      "statusCover",
      isUpdated
        ? "✅ Đã cập nhật thông tin mới lên 2 trang bìa UFM (không bị trùng)!"
        : "✅ Đã chèn mới Bìa chính & Phụ bìa UFM (ẩn số trang bìa)!"
    );
  } catch (err) {
    showBoxStatus("statusCover", "❌ Lỗi chèn bìa (dòng " + (err.line || "?") + "): " + err.message, true);
  }
}
// Gắn toàn bộ hàm xử lý nút ra global window
window.switchTab = switchTab;
window.selectPreset = selectPreset;
window.markCustom = markCustom;
window.applySelectedStandard = applySelectedStandard;
window.applyPageNumbersOnly = applyPageNumbersOnly;
window.removeDoubleSpaces = removeDoubleSpaces;
window.removeEmptyLines = removeEmptyLines;
window.fixPunctuationSpaces = fixPunctuationSpaces;
window.softBreakToParagraph = softBreakToParagraph;
window.cleanAllErrors = cleanAllErrors;
window.changeCase = changeCase;
window.applyHeadingStyle = applyHeadingStyle;
window.applyHeadingQuick = applyHeadingQuick;
window.insertLandscapeSection = insertLandscapeSection;
window.insertPortraitSection = insertPortraitSection;
window.runAdvancedOnly = runAdvancedOnly;
window.runAcademicV21Only = runAcademicV21Only;
window.runCitationV22Only = runCitationV22Only;
window.insertUfmCovers = insertUfmCovers;
