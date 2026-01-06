# SIH — Smart Curriculum Activity & Attendance App

> Problem Statement ID: 25011 

This repository contains the front-end prototype and related pages developed for the Smart India Hackathon (SIH) project: *Smart Curriculum Activity & Attendance App*.

## Overview

Manual attendance systems are time-consuming, error-prone, and reduce teaching efficiency. Students often waste free periods without structured guidance, and institutions lack an integrated tool that combines attendance tracking with personalized student development. This project provides a centralized platform to automate attendance, prevent proxy attendance, and deliver personalized academic and extracurricular guidance.

## Problem

- Time-consuming, error-prone manual attendance.
- Proxy attendance and lack of verification.
- Unstructured free periods leading to poor student productivity.
- Institutions lacking integrated analytics and development tools.

## Solution

An integrated, role-based platform that automates attendance using a triple-layer system (dynamic QR codes, face recognition, and seat mapping), provides academic support, and recommends personalized activities for students during free slots. The system includes dashboards for Students, Teachers, Coordinators, and Principals and an AI assistant named *Aditya*.

Key points:
- Dynamic QR codes (6s refresh) for session authentication.
- Face recognition to verify identity.
- Seat mapping to prevent proxy marking.
- AI chatbot for academic and extracurricular guidance.

## Key Features

- Triple-Layer Attendance: QR + Face Recognition + Seat Mapping.
- Academic Support: Study materials, timetables, report cards, and announcements.
- Role-Based Dashboards: Tailored views for Students, Teachers, Coordinators, Principals.
- AI Chatbot (Aditya): Personalized study and extracurricular guidance; suggestions for free-slot utilization.
- Real-Time Insights: Attendance validation, analytics, and performance tracking.

## Architecture & Tech Stack

- Frontend: React.js (prototype pages present as HTML in this repo). 
- Backend: Node.js / Express (recommended).
- Database: MySQL (user, attendance, schedules, analytics).
- ML: TensorFlow (face recognition model).
- Infrastructure: AWS for hosting and scalable deployment.
- Security: JWT for authentication, bcrypt for password hashing.

## Feasibility

- Technical: Uses mature stacks (React, Node, TensorFlow, MySQL, AWS) enabling robust implementation.
- Operational: Automation reduces teacher workload and improves monitoring.
- Economic: Scalable and cost-effective; deployable with standard cloud infra.
- Legal & Privacy: Data protection through secure auth (JWT), hashed credentials (bcrypt), and recommended privacy policies and consent flows.

## Impact & Benefits

- Students: Transparent attendance and personalized guidance increase productivity.
- Teachers: Saves teaching time and prevents proxies.
- Institutions: Improved administrative efficiency, analytics, and NEP 2020 alignment.
- Social & Educational: Promotes fairness, engagement, and personalized learning.

## Uniqueness

- **Multi-layer attendance integrity**    Triple-layered, anti-proxy attendance using device fingerprinting, geofencing, and dynamic OTP validation.

- **Holistic AI guidance**    Context-aware chatbot that blends academic progress with extracurricular fit, nudging students toward balanced growth.

- **Unified campus workflow**    One platform for attendance, student development, scheduling, and admin—no fragmented tools or duplicate data.

- **Smart conflict resolution**    Drag-and-drop class rescheduling with automatic detection of teacher/classroom/time conflicts and suggested alternatives.


## References

- Automated Attendance Management Systems, IJTEL, 2022.
- AI-Powered Learning Management Systems, IEEE, 2023.
- National Education Policy (NEP 2020), Government of India.

## Getting Started (Quick)

1. Open the relevant portal pages in a browser. Example files are located at the repository root and in subfolders:
   - Co-ordinator portal: `Co-ordinator_portal/index.html` and related pages
   - Principal portal: `Principal_portal/index.html` and related pages
   - Teacher portal: `Teacher_Portal/Login.html` and other pages
2. This repository contains static prototypes (HTML/CSS/JS). For full functionality you will need a backend (Node.js + MySQL) and model serving for face recognition.


## Contact & Credits

This README was created for the SIH submission for Problem Statement ID: 25011. For questions, feature requests, or collaboration, update this repo or contact the project contributors.
