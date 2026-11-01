# AI Tax Advisor

AI-powered tax advisory platform for Indian salaried employees, featuring intelligent document analysis, automated tax computation, and Old vs New Tax Regime comparison.

> **Status:** Under active development. Foundation setup in progress.

## What it does

- Reads company HR and reimbursement policy documents and extracts tax-relevant benefits, with source page references.
- Calculates income tax under both the Old and New regimes using a deterministic, rule-based Python engine.
- Compares the two regimes and explains which one results in lower tax, and why.
- Generates personalised, source-linked tax-planning suggestions and a downloadable PDF report.

## Design principle

The language model is used only for document understanding. All tax calculations are performed by a deterministic Python engine with year-wise versioned rules, so every result is reproducible and testable.

## Planned tech stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Tailwind CSS, Recharts |
| Backend | Python, FastAPI, Pydantic |
| AI | Pluggable LLM layer (Gemini, with Grok as fallback) |
| Documents | PyMuPDF, pdfplumber, python-docx |
| Reports | ReportLab |
| Testing | pytest |

## Repository structure

- `frontend/` : React + Vite application
- `backend/` : FastAPI application and tax engine
- `docs/` : Architecture and tax-rule documentation

## Disclaimer

This project provides estimates for educational and planning purposes only. It is not a substitute for advice from a qualified tax professional.

## License

MIT
