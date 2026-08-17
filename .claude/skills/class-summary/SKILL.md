---
name: class-summary
description: Write a short weekly recap for an English student, formatted to paste straight into Google Classroom. Use when Pili shares class material (Canva/PDF slides, a call transcript, screenshots, or notes) and asks for a class summary, recap, or weekly summary for a specific student.
---

# Class summary

Turns the material from one class into a short recap addressed directly to the student, ready to paste into Google Classroom as-is.

## Before writing

1. **Identify the student.** Ask if it isn't clear from context (a filename like "Cami - Jobs & Careers.pdf", a Classroom screenshot, or the conversation).
2. **Read every source given** — PDF slides, screenshots of the Canva deck, call transcripts, homework screenshots. Extract text from PDFs with `pdftotext -layout`; if a PDF is large (Canva exports can be 100MB+), use `pdfinfo` + `pdftotext -f/-l` per page rather than failing on a whole-file read. Note that PDFs are gitignored in this repo, so read them from wherever the user points (usually `~/Downloads`), don't expect them inside the repo.
3. **Figure out what was actually covered**, in the order it happened: warm-ups/icebreakers, listening/reading material, vocabulary or grammar points (with the real examples/terms used, not generic placeholders), discussion topics, speaking/writing practice, and what was assigned for homework (if anything — don't invent homework that wasn't given).
4. If this is a first session with a student, include a brief intro/icebreaker section; skip it for regular sessions.

## Format

Plain text (or light markdown — bold and bullets only), no headers/H1s, no HTML. This gets pasted directly into Google Classroom, so keep it short and skimmable — a few bullets per section, not paragraphs.

```
Hiii <Name>! 👋 Here's your weekly recap:

**<Class topic/title>**

**<Section: Grammar/Vocabulary/Listening/Reading/Speaking & Writing — name it after what was actually taught>**
- <what was covered, 1 line, with real terms/examples from the material>
- <...>

**<next section>**
- ...

Homework
- <item, or "None assigned this class">

See you next class! 🙌
```

## Rules learned from feedback

- **Address the student by name in the opening line only.** Don't repeat their name through the body of the recap — the whole thing is written *to* them, in second person implicitly, not about them in third person.
- **Section headers are dynamic, not a fixed template.** Use whatever categories match what actually happened that class (e.g. "Grammar: Cleft Sentences", "Vocabulary: Storytelling Hacks", "Reading: Spotting the Techniques") — don't force content into Listening/Reading/Vocabulary/Grammar if that's not what the class was.
- **Don't skip the vocabulary piece.** If a word list, word cloud, or key-terms slide was used to open the class, that's its own section — it's separate from any conceptual/discussion framework taught later (e.g. a word cloud on "calling" is vocabulary; a discussion of hobby/job/career/vocation as concepts is a discussion section).
- **"Homework" is a plain-text label, not bold**, matching the original template style — everything else is bold.
- **No headers, colors, or artifact styling** for this output — it's meant to be copy-pasted as plain text into Classroom, not published as a page. Only build an HTML/artifact version if Pili explicitly asks for something visual instead of a Classroom-ready recap.
- **Keep the sign-off light** ("See you next class! 🙌" or similar) — this is a warm, personal message from tutor to student, not a formal report.
