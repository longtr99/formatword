const PRESETS = {
  ufm: {
    name: "UFM - Trường ĐH Tài chính - Marketing",
    desc: "Times New Roman • 13pt • Lề T3.5 - P2 - Tr2.5 - D2.5 cm • Giãn dòng 1.5",
    fontFamily: "Times New Roman", fontSize: 13, lineSpacing: 1.5,
    spaceBefore: 0, spaceAfter: 6, firstIndent: 1.27,
    mTop: 2.5, mBottom: 2.5, mLeft: 3.5, mRight: 2.0,
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
  el.textContent = msg;
  el.classList.add("show");
  if (timeout > 0) {
    setTimeout(() => el.classList.remove("show"), timeout);
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
}
