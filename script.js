/* ==========================================================================
   ARCHIVO: script.js
   PROYECTO: Sistema Web de Nómina Hospitalaria (150 Empleados - California)
   DESPLIEGUE: GitHub Pages
   DESCRIPCIÓN: Contiene los 150 registros de empleados del hospital,
                funciones de registro, actualización, eliminación, filtrado,
                desglose por departamento y exportación a CSV.
   ========================================================================== */

const DATOS_INICIALES_150 = [
  {
    "id": "EMP-001",
    "nombre": "William Sánchez Rodríguez",
    "departamento": "Emergency Room (ER)",
    "puesto": "Registered Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 57.85,
    "bono": 150.0,
    "salarioBruto": 5009.4,
    "impuestosCA": 1102.07,
    "salarioNeto": 3907.33,
    "estadoPago": "Pagado",
    "correo": "william.sanchez1@pacificgeneralca.org"
  },
  {
    "id": "EMP-002",
    "nombre": "Leonardo Thompson Pérez",
    "departamento": "Emergency Room (ER)",
    "puesto": "ER Physician (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 137.22,
    "bono": 350.0,
    "salarioBruto": 11876.48,
    "impuestosCA": 2612.83,
    "salarioNeto": 9263.65,
    "estadoPago": "Pagado",
    "correo": "leonardo.thompson2@pacificgeneralca.org"
  },
  {
    "id": "EMP-003",
    "nombre": "Sofía Miller Jiménez",
    "departamento": "Emergency Room (ER)",
    "puesto": "Triage Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 72,
    "tarifaHora": 38.24,
    "bono": 150.0,
    "salarioBruto": 2903.28,
    "impuestosCA": 638.72,
    "salarioNeto": 2264.56,
    "estadoPago": "Pendiente",
    "correo": "sofia.miller3@pacificgeneralca.org"
  },
  {
    "id": "EMP-004",
    "nombre": "Nicolás Smith Davis",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Critical Care Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 65.86,
    "bono": 500.0,
    "salarioBruto": 5241.92,
    "impuestosCA": 1153.22,
    "salarioNeto": 4088.7,
    "estadoPago": "En Proceso",
    "correo": "nicolas.smith4@pacificgeneralca.org"
  },
  {
    "id": "EMP-005",
    "nombre": "Amanda Jackson Williams",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Intensivist (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 131.61,
    "bono": 350.0,
    "salarioBruto": 10878.8,
    "impuestosCA": 2393.34,
    "salarioNeto": 8485.46,
    "estadoPago": "Pagado",
    "correo": "amanda.jackson5@pacificgeneralca.org"
  },
  {
    "id": "EMP-006",
    "nombre": "Elena García Flores",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Respiratory Therapist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 48.23,
    "bono": 200.0,
    "salarioBruto": 4251.32,
    "impuestosCA": 935.29,
    "salarioNeto": 3316.03,
    "estadoPago": "Pagado",
    "correo": "elena.garcia6@pacificgeneralca.org"
  },
  {
    "id": "EMP-007",
    "nombre": "Mariana Díaz Ruiz",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 57.3,
    "bono": 0.0,
    "salarioBruto": 4125.6,
    "impuestosCA": 907.63,
    "salarioNeto": 3217.97,
    "estadoPago": "Pagado",
    "correo": "mariana.diaz7@pacificgeneralca.org"
  },
  {
    "id": "EMP-008",
    "nombre": "Miguel Mendoza Davis",
    "departamento": "Surgery & OR",
    "puesto": "Anesthesiologist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 154.21,
    "bono": 500.0,
    "salarioBruto": 12836.8,
    "impuestosCA": 2824.1,
    "salarioNeto": 10012.7,
    "estadoPago": "Pendiente",
    "correo": "miguel.mendoza8@pacificgeneralca.org"
  },
  {
    "id": "EMP-009",
    "nombre": "Laura Williams Sánchez",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Technician",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 36.71,
    "bono": 100.0,
    "salarioBruto": 3036.8,
    "impuestosCA": 668.1,
    "salarioNeto": 2368.7,
    "estadoPago": "En Proceso",
    "correo": "laura.williams9@pacificgeneralca.org"
  },
  {
    "id": "EMP-010",
    "nombre": "Jacqueline Anderson Wilson",
    "departamento": "Pediatrics",
    "puesto": "Pediatric Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 54.34,
    "bono": 0.0,
    "salarioBruto": 4781.92,
    "impuestosCA": 1052.02,
    "salarioNeto": 3729.9,
    "estadoPago": "Pagado",
    "correo": "jacqueline.anderson10@pacificgeneralca.org"
  },
  {
    "id": "EMP-011",
    "nombre": "Nicole López Martínez",
    "departamento": "Pediatrics",
    "puesto": "Pediatrician (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 110.7,
    "bono": 200.0,
    "salarioBruto": 9498.8,
    "impuestosCA": 2089.74,
    "salarioNeto": 7409.06,
    "estadoPago": "Pagado",
    "correo": "nicole.lopez11@pacificgeneralca.org"
  },
  {
    "id": "EMP-012",
    "nombre": "Sofía Reyes Pérez",
    "departamento": "Cardiology",
    "puesto": "Cardiologist (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 143.34,
    "bono": 150.0,
    "salarioBruto": 11617.2,
    "impuestosCA": 2555.78,
    "salarioNeto": 9061.42,
    "estadoPago": "Pagado",
    "correo": "sofia.reyes12@pacificgeneralca.org"
  },
  {
    "id": "EMP-013",
    "nombre": "Jacqueline Álvarez Flores",
    "departamento": "Cardiology",
    "puesto": "Cardiac Sonographer",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 49.55,
    "bono": 150.0,
    "salarioBruto": 4114.0,
    "impuestosCA": 905.08,
    "salarioNeto": 3208.92,
    "estadoPago": "Pendiente",
    "correo": "jacqueline.alvarez13@pacificgeneralca.org"
  },
  {
    "id": "EMP-014",
    "nombre": "Elena Jackson Moore",
    "departamento": "Radiology & Imaging",
    "puesto": "Radiologic Technologist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 45.71,
    "bono": 500.0,
    "salarioBruto": 4339.64,
    "impuestosCA": 954.72,
    "salarioNeto": 3384.92,
    "estadoPago": "En Proceso",
    "correo": "elena.jackson14@pacificgeneralca.org"
  },
  {
    "id": "EMP-015",
    "nombre": "Diego Williams Lee",
    "departamento": "Radiology & Imaging",
    "puesto": "MRI Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 49.96,
    "bono": 100.0,
    "salarioBruto": 3896.96,
    "impuestosCA": 857.33,
    "salarioNeto": 3039.63,
    "estadoPago": "Pagado",
    "correo": "diego.williams15@pacificgeneralca.org"
  },
  {
    "id": "EMP-016",
    "nombre": "Elena Anderson Jackson",
    "departamento": "Clinical Laboratory",
    "puesto": "Clinical Lab Scientist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 51.64,
    "bono": 100.0,
    "salarioBruto": 4231.2,
    "impuestosCA": 930.86,
    "salarioNeto": 3300.34,
    "estadoPago": "Pagado",
    "correo": "elena.anderson16@pacificgeneralca.org"
  },
  {
    "id": "EMP-017",
    "nombre": "Jacqueline Hernández Reyes",
    "departamento": "Clinical Laboratory",
    "puesto": "Phlebotomist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 88,
    "tarifaHora": 28.22,
    "bono": 200.0,
    "salarioBruto": 2683.36,
    "impuestosCA": 590.34,
    "salarioNeto": 2093.02,
    "estadoPago": "Pagado",
    "correo": "jacqueline.hernandez17@pacificgeneralca.org"
  },
  {
    "id": "EMP-018",
    "nombre": "Claudia Ortiz López",
    "departamento": "Hospital Pharmacy",
    "puesto": "Clinical Pharmacist (PharmD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 86.61,
    "bono": 150.0,
    "salarioBruto": 6732.36,
    "impuestosCA": 1481.12,
    "salarioNeto": 5251.24,
    "estadoPago": "Pendiente",
    "correo": "claudia.ortiz18@pacificgeneralca.org"
  },
  {
    "id": "EMP-019",
    "nombre": "Nicole Ramos Díaz",
    "departamento": "Hospital Pharmacy",
    "puesto": "Pharmacy Technician",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 32.49,
    "bono": 150.0,
    "salarioBruto": 2879.16,
    "impuestosCA": 633.42,
    "salarioNeto": 2245.74,
    "estadoPago": "En Proceso",
    "correo": "nicole.ramos19@pacificgeneralca.org"
  },
  {
    "id": "EMP-020",
    "nombre": "Laura Torres Cruz",
    "departamento": "Administration & HR",
    "puesto": "Payroll & HR Specialist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 76,
    "tarifaHora": 37.22,
    "bono": 350.0,
    "salarioBruto": 3178.72,
    "impuestosCA": 699.32,
    "salarioNeto": 2479.4,
    "estadoPago": "Pagado",
    "correo": "laura.torres20@pacificgeneralca.org"
  },
  {
    "id": "EMP-021",
    "nombre": "David Cruz Thompson",
    "departamento": "Administration & HR",
    "puesto": "Medical Billing Coordinator",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 34.43,
    "bono": 150.0,
    "salarioBruto": 2904.4,
    "impuestosCA": 638.97,
    "salarioNeto": 2265.43,
    "estadoPago": "Pagado",
    "correo": "david.cruz21@pacificgeneralca.org"
  },
  {
    "id": "EMP-022",
    "nombre": "Claudia Álvarez Reyes",
    "departamento": "Health IT & Systems",
    "puesto": "HIS Systems Engineer",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 63.66,
    "bono": 0.0,
    "salarioBruto": 4838.16,
    "impuestosCA": 1064.4,
    "salarioNeto": 3773.76,
    "estadoPago": "Pagado",
    "correo": "claudia.alvarez22@pacificgeneralca.org"
  },
  {
    "id": "EMP-023",
    "nombre": "Anthony Hernández Sánchez",
    "departamento": "Emergency Room (ER)",
    "puesto": "Registered Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 76,
    "tarifaHora": 62.78,
    "bono": 500.0,
    "salarioBruto": 5271.28,
    "impuestosCA": 1159.68,
    "salarioNeto": 4111.6,
    "estadoPago": "Pendiente",
    "correo": "anthony.hernandez23@pacificgeneralca.org"
  },
  {
    "id": "EMP-024",
    "nombre": "Patricia Davis López",
    "departamento": "Emergency Room (ER)",
    "puesto": "ER Physician (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 126.45,
    "bono": 250.0,
    "salarioBruto": 10366.0,
    "impuestosCA": 2280.52,
    "salarioNeto": 8085.48,
    "estadoPago": "En Proceso",
    "correo": "patricia.davis24@pacificgeneralca.org"
  },
  {
    "id": "EMP-025",
    "nombre": "Jessica Cruz Brown",
    "departamento": "Emergency Room (ER)",
    "puesto": "Triage Specialist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 45.54,
    "bono": 500.0,
    "salarioBruto": 4507.52,
    "impuestosCA": 991.65,
    "salarioNeto": 3515.87,
    "estadoPago": "Pagado",
    "correo": "jessica.cruz25@pacificgeneralca.org"
  },
  {
    "id": "EMP-026",
    "nombre": "Thomas Sánchez Moore",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Critical Care Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 68.51,
    "bono": 500.0,
    "salarioBruto": 5980.8,
    "impuestosCA": 1315.78,
    "salarioNeto": 4665.02,
    "estadoPago": "Pagado",
    "correo": "thomas.sanchez26@pacificgeneralca.org"
  },
  {
    "id": "EMP-027",
    "nombre": "Andrea Sánchez Gutiérrez",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Intensivist (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 129.74,
    "bono": 0.0,
    "salarioBruto": 10379.2,
    "impuestosCA": 2283.42,
    "salarioNeto": 8095.78,
    "estadoPago": "Pagado",
    "correo": "andrea.sanchez27@pacificgeneralca.org"
  },
  {
    "id": "EMP-028",
    "nombre": "Thomas Lee Cruz",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Respiratory Therapist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 51.62,
    "bono": 350.0,
    "salarioBruto": 4479.6,
    "impuestosCA": 985.51,
    "salarioNeto": 3494.09,
    "estadoPago": "Pendiente",
    "correo": "thomas.lee28@pacificgeneralca.org"
  },
  {
    "id": "EMP-029",
    "nombre": "Sebastián Anderson Chávez",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 88,
    "tarifaHora": 64.95,
    "bono": 350.0,
    "salarioBruto": 6065.6,
    "impuestosCA": 1334.43,
    "salarioNeto": 4731.17,
    "estadoPago": "En Proceso",
    "correo": "sebastian.anderson29@pacificgeneralca.org"
  },
  {
    "id": "EMP-030",
    "nombre": "Samuel Torres Álvarez",
    "departamento": "Surgery & OR",
    "puesto": "Anesthesiologist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 88,
    "tarifaHora": 134.85,
    "bono": 150.0,
    "salarioBruto": 12016.8,
    "impuestosCA": 2643.7,
    "salarioNeto": 9373.1,
    "estadoPago": "Pagado",
    "correo": "samuel.torres30@pacificgeneralca.org"
  },
  {
    "id": "EMP-031",
    "nombre": "Alejandro Davis Ramos",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Technician",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 36.18,
    "bono": 100.0,
    "salarioBruto": 2994.4,
    "impuestosCA": 658.77,
    "salarioNeto": 2335.63,
    "estadoPago": "Pagado",
    "correo": "alejandro.davis31@pacificgeneralca.org"
  },
  {
    "id": "EMP-032",
    "nombre": "Jacqueline Chávez Morales",
    "departamento": "Pediatrics",
    "puesto": "Pediatric Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 72,
    "tarifaHora": 52.89,
    "bono": 350.0,
    "salarioBruto": 4158.08,
    "impuestosCA": 914.78,
    "salarioNeto": 3243.3,
    "estadoPago": "Pagado",
    "correo": "jacqueline.chavez32@pacificgeneralca.org"
  },
  {
    "id": "EMP-033",
    "nombre": "Sofía González Lee",
    "departamento": "Pediatrics",
    "puesto": "Pediatrician (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 125.4,
    "bono": 150.0,
    "salarioBruto": 10182.0,
    "impuestosCA": 2240.04,
    "salarioNeto": 7941.96,
    "estadoPago": "Pendiente",
    "correo": "sofia.gonzalez33@pacificgeneralca.org"
  },
  {
    "id": "EMP-034",
    "nombre": "Stephanie Ramírez Ramírez",
    "departamento": "Cardiology",
    "puesto": "Cardiologist (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 149.26,
    "bono": 150.0,
    "salarioBruto": 12687.84,
    "impuestosCA": 2791.32,
    "salarioNeto": 9896.52,
    "estadoPago": "En Proceso",
    "correo": "stephanie.ramirez34@pacificgeneralca.org"
  },
  {
    "id": "EMP-035",
    "nombre": "Diego Cruz Johnson",
    "departamento": "Cardiology",
    "puesto": "Cardiac Sonographer",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 88,
    "tarifaHora": 52.07,
    "bono": 150.0,
    "salarioBruto": 4732.16,
    "impuestosCA": 1041.08,
    "salarioNeto": 3691.08,
    "estadoPago": "Pagado",
    "correo": "diego.cruz35@pacificgeneralca.org"
  },
  {
    "id": "EMP-036",
    "nombre": "David Lee Jackson",
    "departamento": "Radiology & Imaging",
    "puesto": "Radiologic Technologist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 52.13,
    "bono": 100.0,
    "salarioBruto": 4061.88,
    "impuestosCA": 893.61,
    "salarioNeto": 3168.27,
    "estadoPago": "Pagado",
    "correo": "david.lee36@pacificgeneralca.org"
  },
  {
    "id": "EMP-037",
    "nombre": "Joseph Taylor Álvarez",
    "departamento": "Radiology & Imaging",
    "puesto": "MRI Specialist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 58.8,
    "bono": 100.0,
    "salarioBruto": 4804.0,
    "impuestosCA": 1056.88,
    "salarioNeto": 3747.12,
    "estadoPago": "Pagado",
    "correo": "joseph.taylor37@pacificgeneralca.org"
  },
  {
    "id": "EMP-038",
    "nombre": "Isabella Morales Reyes",
    "departamento": "Clinical Laboratory",
    "puesto": "Clinical Lab Scientist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 72,
    "tarifaHora": 53.06,
    "bono": 350.0,
    "salarioBruto": 4170.32,
    "impuestosCA": 917.47,
    "salarioNeto": 3252.85,
    "estadoPago": "Pendiente",
    "correo": "isabella.morales38@pacificgeneralca.org"
  },
  {
    "id": "EMP-039",
    "nombre": "Sarah Reyes Miller",
    "departamento": "Clinical Laboratory",
    "puesto": "Phlebotomist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 28.05,
    "bono": 150.0,
    "salarioBruto": 2281.8,
    "impuestosCA": 502.0,
    "salarioNeto": 1779.8,
    "estadoPago": "En Proceso",
    "correo": "sarah.reyes39@pacificgeneralca.org"
  },
  {
    "id": "EMP-040",
    "nombre": "William Hernández Reyes",
    "departamento": "Hospital Pharmacy",
    "puesto": "Clinical Pharmacist (PharmD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 86.49,
    "bono": 100.0,
    "salarioBruto": 6327.28,
    "impuestosCA": 1392.0,
    "salarioNeto": 4935.28,
    "estadoPago": "Pagado",
    "correo": "william.hernandez40@pacificgeneralca.org"
  },
  {
    "id": "EMP-041",
    "nombre": "Mateo Smith Morales",
    "departamento": "Hospital Pharmacy",
    "puesto": "Pharmacy Technician",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 33.68,
    "bono": 150.0,
    "salarioBruto": 2844.4,
    "impuestosCA": 625.77,
    "salarioNeto": 2218.63,
    "estadoPago": "Pagado",
    "correo": "mateo.smith41@pacificgeneralca.org"
  },
  {
    "id": "EMP-042",
    "nombre": "David Ramírez Lee",
    "departamento": "Administration & HR",
    "puesto": "Payroll & HR Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 40.19,
    "bono": 0.0,
    "salarioBruto": 3215.2,
    "impuestosCA": 707.34,
    "salarioNeto": 2507.86,
    "estadoPago": "Pagado",
    "correo": "david.ramirez42@pacificgeneralca.org"
  },
  {
    "id": "EMP-043",
    "nombre": "Kevin Medina Vargas",
    "departamento": "Administration & HR",
    "puesto": "Medical Billing Coordinator",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 31.75,
    "bono": 150.0,
    "salarioBruto": 2563.0,
    "impuestosCA": 563.86,
    "salarioNeto": 1999.14,
    "estadoPago": "Pendiente",
    "correo": "kevin.medina43@pacificgeneralca.org"
  },
  {
    "id": "EMP-044",
    "nombre": "Patricia Mendoza Jiménez",
    "departamento": "Health IT & Systems",
    "puesto": "HIS Systems Engineer",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 62.94,
    "bono": 500.0,
    "salarioBruto": 5535.2,
    "impuestosCA": 1217.74,
    "salarioNeto": 4317.46,
    "estadoPago": "En Proceso",
    "correo": "patricia.mendoza44@pacificgeneralca.org"
  },
  {
    "id": "EMP-045",
    "nombre": "Camila Moore Taylor",
    "departamento": "Emergency Room (ER)",
    "puesto": "Registered Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 55.38,
    "bono": 250.0,
    "salarioBruto": 4901.92,
    "impuestosCA": 1078.42,
    "salarioNeto": 3823.5,
    "estadoPago": "Pagado",
    "correo": "camila.moore45@pacificgeneralca.org"
  },
  {
    "id": "EMP-046",
    "nombre": "Thomas Ruiz Pérez",
    "departamento": "Emergency Room (ER)",
    "puesto": "ER Physician (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 120.75,
    "bono": 350.0,
    "salarioBruto": 9527.0,
    "impuestosCA": 2095.94,
    "salarioNeto": 7431.06,
    "estadoPago": "Pagado",
    "correo": "thomas.ruiz46@pacificgeneralca.org"
  },
  {
    "id": "EMP-047",
    "nombre": "Eduardo Ramírez Jiménez",
    "departamento": "Emergency Room (ER)",
    "puesto": "Triage Specialist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 76,
    "tarifaHora": 40.23,
    "bono": 150.0,
    "salarioBruto": 3207.48,
    "impuestosCA": 705.65,
    "salarioNeto": 2501.83,
    "estadoPago": "Pagado",
    "correo": "eduardo.ramirez47@pacificgeneralca.org"
  },
  {
    "id": "EMP-048",
    "nombre": "Rachel López Moreno",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Critical Care Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 88,
    "tarifaHora": 70.06,
    "bono": 350.0,
    "salarioBruto": 6515.28,
    "impuestosCA": 1433.36,
    "salarioNeto": 5081.92,
    "estadoPago": "Pendiente",
    "correo": "rachel.lopez48@pacificgeneralca.org"
  },
  {
    "id": "EMP-049",
    "nombre": "Sebastián Hernández Taylor",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Intensivist (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 150.08,
    "bono": 0.0,
    "salarioBruto": 12006.4,
    "impuestosCA": 2641.41,
    "salarioNeto": 9364.99,
    "estadoPago": "En Proceso",
    "correo": "sebastian.hernandez49@pacificgeneralca.org"
  },
  {
    "id": "EMP-050",
    "nombre": "Anthony Morales Flores",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Respiratory Therapist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 48.86,
    "bono": 150.0,
    "salarioBruto": 4058.8,
    "impuestosCA": 892.94,
    "salarioNeto": 3165.86,
    "estadoPago": "Pagado",
    "correo": "anthony.morales50@pacificgeneralca.org"
  },
  {
    "id": "EMP-051",
    "nombre": "Rachel Romero Hernández",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 61.31,
    "bono": 100.0,
    "salarioBruto": 4759.56,
    "impuestosCA": 1047.1,
    "salarioNeto": 3712.46,
    "estadoPago": "Pagado",
    "correo": "rachel.romero51@pacificgeneralca.org"
  },
  {
    "id": "EMP-052",
    "nombre": "Adrián Herrera Gutiérrez",
    "departamento": "Surgery & OR",
    "puesto": "Anesthesiologist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 150.9,
    "bono": 150.0,
    "salarioBruto": 12222.0,
    "impuestosCA": 2688.84,
    "salarioNeto": 9533.16,
    "estadoPago": "Pagado",
    "correo": "adrian.herrera52@pacificgeneralca.org"
  },
  {
    "id": "EMP-053",
    "nombre": "Kevin Brown Thomas",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Technician",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 40.38,
    "bono": 150.0,
    "salarioBruto": 3541.92,
    "impuestosCA": 779.22,
    "salarioNeto": 2762.7,
    "estadoPago": "Pendiente",
    "correo": "kevin.brown53@pacificgeneralca.org"
  },
  {
    "id": "EMP-054",
    "nombre": "Javier Díaz Hernández",
    "departamento": "Pediatrics",
    "puesto": "Pediatric Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 58.83,
    "bono": 0.0,
    "salarioBruto": 4706.4,
    "impuestosCA": 1035.41,
    "salarioNeto": 3670.99,
    "estadoPago": "En Proceso",
    "correo": "javier.diaz54@pacificgeneralca.org"
  },
  {
    "id": "EMP-055",
    "nombre": "Elizabeth Ramos Hernández",
    "departamento": "Pediatrics",
    "puesto": "Pediatrician (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 119.6,
    "bono": 150.0,
    "salarioBruto": 8761.2,
    "impuestosCA": 1927.46,
    "salarioNeto": 6833.74,
    "estadoPago": "Pagado",
    "correo": "elizabeth.ramos55@pacificgeneralca.org"
  },
  {
    "id": "EMP-056",
    "nombre": "Jason Johnson Flores",
    "departamento": "Cardiology",
    "puesto": "Cardiologist (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 72,
    "tarifaHora": 163.82,
    "bono": 0.0,
    "salarioBruto": 11795.04,
    "impuestosCA": 2594.91,
    "salarioNeto": 9200.13,
    "estadoPago": "Pagado",
    "correo": "jason.johnson56@pacificgeneralca.org"
  },
  {
    "id": "EMP-057",
    "nombre": "Jason Rivera López",
    "departamento": "Cardiology",
    "puesto": "Cardiac Sonographer",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 46.68,
    "bono": 0.0,
    "salarioBruto": 3734.4,
    "impuestosCA": 821.57,
    "salarioNeto": 2912.83,
    "estadoPago": "Pagado",
    "correo": "jason.rivera57@pacificgeneralca.org"
  },
  {
    "id": "EMP-058",
    "nombre": "Claudia Sánchez Jones",
    "departamento": "Radiology & Imaging",
    "puesto": "Radiologic Technologist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 50.79,
    "bono": 0.0,
    "salarioBruto": 3860.04,
    "impuestosCA": 849.21,
    "salarioNeto": 3010.83,
    "estadoPago": "Pendiente",
    "correo": "claudia.sanchez58@pacificgeneralca.org"
  },
  {
    "id": "EMP-059",
    "nombre": "Ashley González Vargas",
    "departamento": "Radiology & Imaging",
    "puesto": "MRI Specialist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 55.0,
    "bono": 350.0,
    "salarioBruto": 4970.0,
    "impuestosCA": 1093.4,
    "salarioNeto": 3876.6,
    "estadoPago": "En Proceso",
    "correo": "ashley.gonzalez59@pacificgeneralca.org"
  },
  {
    "id": "EMP-060",
    "nombre": "Carlos Cruz Díaz",
    "departamento": "Clinical Laboratory",
    "puesto": "Clinical Lab Scientist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 57.59,
    "bono": 0.0,
    "salarioBruto": 4837.56,
    "impuestosCA": 1064.26,
    "salarioNeto": 3773.3,
    "estadoPago": "Pagado",
    "correo": "carlos.cruz60@pacificgeneralca.org"
  },
  {
    "id": "EMP-061",
    "nombre": "Adrián Romero Ramírez",
    "departamento": "Clinical Laboratory",
    "puesto": "Phlebotomist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 32.52,
    "bono": 100.0,
    "salarioBruto": 2831.68,
    "impuestosCA": 622.97,
    "salarioNeto": 2208.71,
    "estadoPago": "Pagado",
    "correo": "adrian.romero61@pacificgeneralca.org"
  },
  {
    "id": "EMP-062",
    "nombre": "Carlos López García",
    "departamento": "Hospital Pharmacy",
    "puesto": "Clinical Pharmacist (PharmD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 81.94,
    "bono": 350.0,
    "salarioBruto": 6905.2,
    "impuestosCA": 1519.14,
    "salarioNeto": 5386.06,
    "estadoPago": "Pagado",
    "correo": "carlos.lopez62@pacificgeneralca.org"
  },
  {
    "id": "EMP-063",
    "nombre": "Sebastián López Williams",
    "departamento": "Hospital Pharmacy",
    "puesto": "Pharmacy Technician",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 32.54,
    "bono": 0.0,
    "salarioBruto": 2473.04,
    "impuestosCA": 544.07,
    "salarioNeto": 1928.97,
    "estadoPago": "Pendiente",
    "correo": "sebastian.lopez63@pacificgeneralca.org"
  },
  {
    "id": "EMP-064",
    "nombre": "Miguel López Morales",
    "departamento": "Administration & HR",
    "puesto": "Payroll & HR Specialist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 37.56,
    "bono": 100.0,
    "salarioBruto": 3104.8,
    "impuestosCA": 683.06,
    "salarioNeto": 2421.74,
    "estadoPago": "En Proceso",
    "correo": "miguel.lopez64@pacificgeneralca.org"
  },
  {
    "id": "EMP-065",
    "nombre": "Jacqueline Williams Martin",
    "departamento": "Administration & HR",
    "puesto": "Medical Billing Coordinator",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 35.89,
    "bono": 500.0,
    "salarioBruto": 3371.2,
    "impuestosCA": 741.66,
    "salarioNeto": 2629.54,
    "estadoPago": "Pagado",
    "correo": "jacqueline.williams65@pacificgeneralca.org"
  },
  {
    "id": "EMP-066",
    "nombre": "Jessica García Thomas",
    "departamento": "Health IT & Systems",
    "puesto": "HIS Systems Engineer",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 88,
    "tarifaHora": 64.43,
    "bono": 150.0,
    "salarioBruto": 5819.84,
    "impuestosCA": 1280.36,
    "salarioNeto": 4539.48,
    "estadoPago": "Pagado",
    "correo": "jessica.garcia66@pacificgeneralca.org"
  },
  {
    "id": "EMP-067",
    "nombre": "Sebastián Ramírez Cruz",
    "departamento": "Emergency Room (ER)",
    "puesto": "Registered Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 66.46,
    "bono": 500.0,
    "salarioBruto": 5285.12,
    "impuestosCA": 1162.73,
    "salarioNeto": 4122.39,
    "estadoPago": "Pagado",
    "correo": "sebastian.ramirez67@pacificgeneralca.org"
  },
  {
    "id": "EMP-068",
    "nombre": "Sarah Torres Ortiz",
    "departamento": "Emergency Room (ER)",
    "puesto": "ER Physician (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 133.14,
    "bono": 500.0,
    "salarioBruto": 11151.2,
    "impuestosCA": 2453.26,
    "salarioNeto": 8697.94,
    "estadoPago": "Pendiente",
    "correo": "sarah.torres68@pacificgeneralca.org"
  },
  {
    "id": "EMP-069",
    "nombre": "Andrea Díaz Moore",
    "departamento": "Emergency Room (ER)",
    "puesto": "Triage Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 44.82,
    "bono": 350.0,
    "salarioBruto": 4114.88,
    "impuestosCA": 905.27,
    "salarioNeto": 3209.61,
    "estadoPago": "En Proceso",
    "correo": "andrea.diaz69@pacificgeneralca.org"
  },
  {
    "id": "EMP-070",
    "nombre": "Diana Cruz Hernández",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Critical Care Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 66.88,
    "bono": 200.0,
    "salarioBruto": 5015.36,
    "impuestosCA": 1103.38,
    "salarioNeto": 3911.98,
    "estadoPago": "Pagado",
    "correo": "diana.cruz70@pacificgeneralca.org"
  },
  {
    "id": "EMP-071",
    "nombre": "Daniel García Ruiz",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Intensivist (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 88,
    "tarifaHora": 128.92,
    "bono": 200.0,
    "salarioBruto": 11544.96,
    "impuestosCA": 2539.89,
    "salarioNeto": 9005.07,
    "estadoPago": "Pagado",
    "correo": "daniel.garcia71@pacificgeneralca.org"
  },
  {
    "id": "EMP-072",
    "nombre": "Diego Thompson Moreno",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Respiratory Therapist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 51.06,
    "bono": 350.0,
    "salarioBruto": 4434.8,
    "impuestosCA": 975.66,
    "salarioNeto": 3459.14,
    "estadoPago": "Pagado",
    "correo": "diego.thompson72@pacificgeneralca.org"
  },
  {
    "id": "EMP-073",
    "nombre": "Alejandro Sánchez López",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 68.66,
    "bono": 150.0,
    "salarioBruto": 5917.44,
    "impuestosCA": 1301.84,
    "salarioNeto": 4615.6,
    "estadoPago": "Pendiente",
    "correo": "alejandro.sanchez73@pacificgeneralca.org"
  },
  {
    "id": "EMP-074",
    "nombre": "Daniel Álvarez Miller",
    "departamento": "Surgery & OR",
    "puesto": "Anesthesiologist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 134.44,
    "bono": 150.0,
    "salarioBruto": 10905.2,
    "impuestosCA": 2399.14,
    "salarioNeto": 8506.06,
    "estadoPago": "En Proceso",
    "correo": "daniel.alvarez74@pacificgeneralca.org"
  },
  {
    "id": "EMP-075",
    "nombre": "Daniel Chávez Álvarez",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Technician",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 88,
    "tarifaHora": 44.75,
    "bono": 0.0,
    "salarioBruto": 3938.0,
    "impuestosCA": 866.36,
    "salarioNeto": 3071.64,
    "estadoPago": "Pagado",
    "correo": "daniel.chavez75@pacificgeneralca.org"
  },
  {
    "id": "EMP-076",
    "nombre": "Miguel Díaz Moore",
    "departamento": "Pediatrics",
    "puesto": "Pediatric Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 58.0,
    "bono": 100.0,
    "salarioBruto": 4508.0,
    "impuestosCA": 991.76,
    "salarioNeto": 3516.24,
    "estadoPago": "Pagado",
    "correo": "miguel.diaz76@pacificgeneralca.org"
  },
  {
    "id": "EMP-077",
    "nombre": "Stephanie Brown Vargas",
    "departamento": "Pediatrics",
    "puesto": "Pediatrician (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 123.74,
    "bono": 150.0,
    "salarioBruto": 10049.2,
    "impuestosCA": 2210.82,
    "salarioNeto": 7838.38,
    "estadoPago": "Pagado",
    "correo": "stephanie.brown77@pacificgeneralca.org"
  },
  {
    "id": "EMP-078",
    "nombre": "Rachel Flores Rivera",
    "departamento": "Cardiology",
    "puesto": "Cardiologist (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 135.74,
    "bono": 150.0,
    "salarioBruto": 11009.2,
    "impuestosCA": 2422.02,
    "salarioNeto": 8587.18,
    "estadoPago": "Pendiente",
    "correo": "rachel.flores78@pacificgeneralca.org"
  },
  {
    "id": "EMP-079",
    "nombre": "Andrea Vargas Thomas",
    "departamento": "Cardiology",
    "puesto": "Cardiac Sonographer",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 53.35,
    "bono": 0.0,
    "salarioBruto": 4694.8,
    "impuestosCA": 1032.86,
    "salarioNeto": 3661.94,
    "estadoPago": "En Proceso",
    "correo": "andrea.vargas79@pacificgeneralca.org"
  },
  {
    "id": "EMP-080",
    "nombre": "Elena Flores Jackson",
    "departamento": "Radiology & Imaging",
    "puesto": "Radiologic Technologist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 72,
    "tarifaHora": 48.83,
    "bono": 0.0,
    "salarioBruto": 3515.76,
    "impuestosCA": 773.47,
    "salarioNeto": 2742.29,
    "estadoPago": "Pagado",
    "correo": "elena.flores80@pacificgeneralca.org"
  },
  {
    "id": "EMP-081",
    "nombre": "Jason Medina Reyes",
    "departamento": "Radiology & Imaging",
    "puesto": "MRI Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 57.8,
    "bono": 100.0,
    "salarioBruto": 4492.8,
    "impuestosCA": 988.42,
    "salarioNeto": 3504.38,
    "estadoPago": "Pagado",
    "correo": "jason.medina81@pacificgeneralca.org"
  },
  {
    "id": "EMP-082",
    "nombre": "Miguel Chávez Reyes",
    "departamento": "Clinical Laboratory",
    "puesto": "Clinical Lab Scientist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 49.28,
    "bono": 0.0,
    "salarioBruto": 3745.28,
    "impuestosCA": 823.96,
    "salarioNeto": 2921.32,
    "estadoPago": "Pagado",
    "correo": "miguel.chavez82@pacificgeneralca.org"
  },
  {
    "id": "EMP-083",
    "nombre": "Claudia Ruiz Ortiz",
    "departamento": "Clinical Laboratory",
    "puesto": "Phlebotomist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 88,
    "tarifaHora": 28.49,
    "bono": 200.0,
    "salarioBruto": 2707.12,
    "impuestosCA": 595.57,
    "salarioNeto": 2111.55,
    "estadoPago": "Pendiente",
    "correo": "claudia.ruiz83@pacificgeneralca.org"
  },
  {
    "id": "EMP-084",
    "nombre": "Miguel Taylor Smith",
    "departamento": "Hospital Pharmacy",
    "puesto": "Clinical Pharmacist (PharmD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 82.87,
    "bono": 150.0,
    "salarioBruto": 6779.6,
    "impuestosCA": 1491.51,
    "salarioNeto": 5288.09,
    "estadoPago": "En Proceso",
    "correo": "miguel.taylor84@pacificgeneralca.org"
  },
  {
    "id": "EMP-085",
    "nombre": "Andrea Rodríguez Sánchez",
    "departamento": "Hospital Pharmacy",
    "puesto": "Pharmacy Technician",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 30.25,
    "bono": 100.0,
    "salarioBruto": 2520.0,
    "impuestosCA": 554.4,
    "salarioNeto": 1965.6,
    "estadoPago": "Pagado",
    "correo": "andrea.rodriguez85@pacificgeneralca.org"
  },
  {
    "id": "EMP-086",
    "nombre": "Daniel Pérez Davis",
    "departamento": "Administration & HR",
    "puesto": "Payroll & HR Specialist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 38.11,
    "bono": 200.0,
    "salarioBruto": 3248.8,
    "impuestosCA": 714.74,
    "salarioNeto": 2534.06,
    "estadoPago": "Pagado",
    "correo": "daniel.perez86@pacificgeneralca.org"
  },
  {
    "id": "EMP-087",
    "nombre": "Patricia Davis Smith",
    "departamento": "Administration & HR",
    "puesto": "Medical Billing Coordinator",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 72,
    "tarifaHora": 34.08,
    "bono": 150.0,
    "salarioBruto": 2603.76,
    "impuestosCA": 572.83,
    "salarioNeto": 2030.93,
    "estadoPago": "Pagado",
    "correo": "patricia.davis87@pacificgeneralca.org"
  },
  {
    "id": "EMP-088",
    "nombre": "Samuel Cruz Martínez",
    "departamento": "Health IT & Systems",
    "puesto": "HIS Systems Engineer",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 62.41,
    "bono": 150.0,
    "salarioBruto": 5392.44,
    "impuestosCA": 1186.34,
    "salarioNeto": 4206.1,
    "estadoPago": "Pendiente",
    "correo": "samuel.cruz88@pacificgeneralca.org"
  },
  {
    "id": "EMP-089",
    "nombre": "Rebecca Williams Moore",
    "departamento": "Emergency Room (ER)",
    "puesto": "Registered Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 67.16,
    "bono": 500.0,
    "salarioBruto": 6141.44,
    "impuestosCA": 1351.12,
    "salarioNeto": 4790.32,
    "estadoPago": "En Proceso",
    "correo": "rebecca.williams89@pacificgeneralca.org"
  },
  {
    "id": "EMP-090",
    "nombre": "Joseph Gómez Álvarez",
    "departamento": "Emergency Room (ER)",
    "puesto": "ER Physician (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 117.1,
    "bono": 500.0,
    "salarioBruto": 9868.0,
    "impuestosCA": 2170.96,
    "salarioNeto": 7697.04,
    "estadoPago": "Pagado",
    "correo": "joseph.gomez90@pacificgeneralca.org"
  },
  {
    "id": "EMP-091",
    "nombre": "Andrea Wilson Ramos",
    "departamento": "Emergency Room (ER)",
    "puesto": "Triage Specialist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 44.78,
    "bono": 500.0,
    "salarioBruto": 4261.52,
    "impuestosCA": 937.53,
    "salarioNeto": 3323.99,
    "estadoPago": "Pagado",
    "correo": "andrea.wilson91@pacificgeneralca.org"
  },
  {
    "id": "EMP-092",
    "nombre": "Natalia Smith Chávez",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Critical Care Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 63.72,
    "bono": 250.0,
    "salarioBruto": 5602.48,
    "impuestosCA": 1232.55,
    "salarioNeto": 4369.93,
    "estadoPago": "Pagado",
    "correo": "natalia.smith92@pacificgeneralca.org"
  },
  {
    "id": "EMP-093",
    "nombre": "Charles Gutiérrez Brown",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Intensivist (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 130.76,
    "bono": 500.0,
    "salarioBruto": 10437.76,
    "impuestosCA": 2296.31,
    "salarioNeto": 8141.45,
    "estadoPago": "Pendiente",
    "correo": "charles.gutierrez93@pacificgeneralca.org"
  },
  {
    "id": "EMP-094",
    "nombre": "Fernando Moore Thompson",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Respiratory Therapist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 50.16,
    "bono": 200.0,
    "salarioBruto": 4012.16,
    "impuestosCA": 882.68,
    "salarioNeto": 3129.48,
    "estadoPago": "En Proceso",
    "correo": "fernando.moore94@pacificgeneralca.org"
  },
  {
    "id": "EMP-095",
    "nombre": "Claudia Brown García",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 60.02,
    "bono": 250.0,
    "salarioBruto": 5051.6,
    "impuestosCA": 1111.35,
    "salarioNeto": 3940.25,
    "estadoPago": "Pagado",
    "correo": "claudia.brown95@pacificgeneralca.org"
  },
  {
    "id": "EMP-096",
    "nombre": "Kevin Miller Davis",
    "departamento": "Surgery & OR",
    "puesto": "Anesthesiologist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 139.67,
    "bono": 100.0,
    "salarioBruto": 11832.28,
    "impuestosCA": 2603.1,
    "salarioNeto": 9229.18,
    "estadoPago": "Pagado",
    "correo": "kevin.miller96@pacificgeneralca.org"
  },
  {
    "id": "EMP-097",
    "nombre": "Eduardo Moore Díaz",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Technician",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 40.26,
    "bono": 150.0,
    "salarioBruto": 3370.8,
    "impuestosCA": 741.58,
    "salarioNeto": 2629.22,
    "estadoPago": "Pagado",
    "correo": "eduardo.moore97@pacificgeneralca.org"
  },
  {
    "id": "EMP-098",
    "nombre": "Diego Thomas González",
    "departamento": "Pediatrics",
    "puesto": "Pediatric Nurse (RN)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 56.19,
    "bono": 500.0,
    "salarioBruto": 4995.2,
    "impuestosCA": 1098.94,
    "salarioNeto": 3896.26,
    "estadoPago": "Pendiente",
    "correo": "diego.thomas98@pacificgeneralca.org"
  },
  {
    "id": "EMP-099",
    "nombre": "Ashley Ruiz González",
    "departamento": "Pediatrics",
    "puesto": "Pediatrician (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 88,
    "tarifaHora": 128.8,
    "bono": 0.0,
    "salarioBruto": 11334.4,
    "impuestosCA": 2493.57,
    "salarioNeto": 8840.83,
    "estadoPago": "En Proceso",
    "correo": "ashley.ruiz99@pacificgeneralca.org"
  },
  {
    "id": "EMP-100",
    "nombre": "Melissa Chávez Reyes",
    "departamento": "Cardiology",
    "puesto": "Cardiologist (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 140.97,
    "bono": 0.0,
    "salarioBruto": 12405.36,
    "impuestosCA": 2729.18,
    "salarioNeto": 9676.18,
    "estadoPago": "Pagado",
    "correo": "melissa.chavez100@pacificgeneralca.org"
  },
  {
    "id": "EMP-101",
    "nombre": "Daniel Morales Medina",
    "departamento": "Cardiology",
    "puesto": "Cardiac Sonographer",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 54.5,
    "bono": 0.0,
    "salarioBruto": 4360.0,
    "impuestosCA": 959.2,
    "salarioNeto": 3400.8,
    "estadoPago": "Pagado",
    "correo": "daniel.morales101@pacificgeneralca.org"
  },
  {
    "id": "EMP-102",
    "nombre": "Laura Vargas Anderson",
    "departamento": "Radiology & Imaging",
    "puesto": "Radiologic Technologist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 46.94,
    "bono": 150.0,
    "salarioBruto": 3905.2,
    "impuestosCA": 859.14,
    "salarioNeto": 3046.06,
    "estadoPago": "Pagado",
    "correo": "laura.vargas102@pacificgeneralca.org"
  },
  {
    "id": "EMP-103",
    "nombre": "Fernando Aguilar Romero",
    "departamento": "Radiology & Imaging",
    "puesto": "MRI Specialist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 49.77,
    "bono": 150.0,
    "salarioBruto": 3932.52,
    "impuestosCA": 865.15,
    "salarioNeto": 3067.37,
    "estadoPago": "Pendiente",
    "correo": "fernando.aguilar103@pacificgeneralca.org"
  },
  {
    "id": "EMP-104",
    "nombre": "Alejandro Pérez Jiménez",
    "departamento": "Clinical Laboratory",
    "puesto": "Clinical Lab Scientist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 76,
    "tarifaHora": 51.11,
    "bono": 500.0,
    "salarioBruto": 4384.36,
    "impuestosCA": 964.56,
    "salarioNeto": 3419.8,
    "estadoPago": "En Proceso",
    "correo": "alejandro.perez104@pacificgeneralca.org"
  },
  {
    "id": "EMP-105",
    "nombre": "Jessica Herrera Hernández",
    "departamento": "Clinical Laboratory",
    "puesto": "Phlebotomist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 29.74,
    "bono": 0.0,
    "salarioBruto": 2379.2,
    "impuestosCA": 523.42,
    "salarioNeto": 1855.78,
    "estadoPago": "Pagado",
    "correo": "jessica.herrera105@pacificgeneralca.org"
  },
  {
    "id": "EMP-106",
    "nombre": "Laura Ramírez Herrera",
    "departamento": "Hospital Pharmacy",
    "puesto": "Clinical Pharmacist (PharmD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 84,
    "tarifaHora": 80.5,
    "bono": 150.0,
    "salarioBruto": 6912.0,
    "impuestosCA": 1520.64,
    "salarioNeto": 5391.36,
    "estadoPago": "Pagado",
    "correo": "laura.ramirez106@pacificgeneralca.org"
  },
  {
    "id": "EMP-107",
    "nombre": "Robert Ramos Moreno",
    "departamento": "Hospital Pharmacy",
    "puesto": "Pharmacy Technician",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 34.71,
    "bono": 350.0,
    "salarioBruto": 3126.8,
    "impuestosCA": 687.9,
    "salarioNeto": 2438.9,
    "estadoPago": "Pagado",
    "correo": "robert.ramos107@pacificgeneralca.org"
  },
  {
    "id": "EMP-108",
    "nombre": "Patricia Brown Moreno",
    "departamento": "Administration & HR",
    "puesto": "Payroll & HR Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 41.69,
    "bono": 100.0,
    "salarioBruto": 3268.44,
    "impuestosCA": 719.06,
    "salarioNeto": 2549.38,
    "estadoPago": "Pendiente",
    "correo": "patricia.brown108@pacificgeneralca.org"
  },
  {
    "id": "EMP-109",
    "nombre": "Eduardo Cruz Morales",
    "departamento": "Administration & HR",
    "puesto": "Medical Billing Coordinator",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 36.1,
    "bono": 150.0,
    "salarioBruto": 3326.8,
    "impuestosCA": 731.9,
    "salarioNeto": 2594.9,
    "estadoPago": "En Proceso",
    "correo": "eduardo.cruz109@pacificgeneralca.org"
  },
  {
    "id": "EMP-110",
    "nombre": "Diana Anderson Morales",
    "departamento": "Health IT & Systems",
    "puesto": "HIS Systems Engineer",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 62.48,
    "bono": 500.0,
    "salarioBruto": 5498.4,
    "impuestosCA": 1209.65,
    "salarioNeto": 4288.75,
    "estadoPago": "Pagado",
    "correo": "diana.anderson110@pacificgeneralca.org"
  },
  {
    "id": "EMP-111",
    "nombre": "Javier Morales Ortiz",
    "departamento": "Emergency Room (ER)",
    "puesto": "Registered Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 58.48,
    "bono": 350.0,
    "salarioBruto": 5028.4,
    "impuestosCA": 1106.25,
    "salarioNeto": 3922.15,
    "estadoPago": "Pagado",
    "correo": "javier.morales111@pacificgeneralca.org"
  },
  {
    "id": "EMP-112",
    "nombre": "Sofía Ramírez Torres",
    "departamento": "Emergency Room (ER)",
    "puesto": "ER Physician (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 126.49,
    "bono": 150.0,
    "salarioBruto": 9763.24,
    "impuestosCA": 2147.91,
    "salarioNeto": 7615.33,
    "estadoPago": "Pagado",
    "correo": "sofia.ramirez112@pacificgeneralca.org"
  },
  {
    "id": "EMP-113",
    "nombre": "Nicole Díaz López",
    "departamento": "Emergency Room (ER)",
    "puesto": "Triage Specialist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 41.26,
    "bono": 350.0,
    "salarioBruto": 3650.8,
    "impuestosCA": 803.18,
    "salarioNeto": 2847.62,
    "estadoPago": "Pendiente",
    "correo": "nicole.diaz113@pacificgeneralca.org"
  },
  {
    "id": "EMP-114",
    "nombre": "Laura Vargas Hernández",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Critical Care Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 69.66,
    "bono": 250.0,
    "salarioBruto": 5544.16,
    "impuestosCA": 1219.72,
    "salarioNeto": 4324.44,
    "estadoPago": "En Proceso",
    "correo": "laura.vargas114@pacificgeneralca.org"
  },
  {
    "id": "EMP-115",
    "nombre": "Stephanie Miller Jackson",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Intensivist (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 150.7,
    "bono": 350.0,
    "salarioBruto": 11200.4,
    "impuestosCA": 2464.09,
    "salarioNeto": 8736.31,
    "estadoPago": "Pagado",
    "correo": "stephanie.miller115@pacificgeneralca.org"
  },
  {
    "id": "EMP-116",
    "nombre": "Fernando Medina García",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Respiratory Therapist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 46.99,
    "bono": 250.0,
    "salarioBruto": 4009.2,
    "impuestosCA": 882.02,
    "salarioNeto": 3127.18,
    "estadoPago": "Pagado",
    "correo": "fernando.medina116@pacificgeneralca.org"
  },
  {
    "id": "EMP-117",
    "nombre": "Jason Vargas Williams",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 66.28,
    "bono": 150.0,
    "salarioBruto": 5717.52,
    "impuestosCA": 1257.85,
    "salarioNeto": 4459.67,
    "estadoPago": "Pagado",
    "correo": "jason.vargas117@pacificgeneralca.org"
  },
  {
    "id": "EMP-118",
    "nombre": "Nicolás Aguilar Reyes",
    "departamento": "Surgery & OR",
    "puesto": "Anesthesiologist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 143.08,
    "bono": 0.0,
    "salarioBruto": 11446.4,
    "impuestosCA": 2518.21,
    "salarioNeto": 8928.19,
    "estadoPago": "Pendiente",
    "correo": "nicolas.aguilar118@pacificgeneralca.org"
  },
  {
    "id": "EMP-119",
    "nombre": "Fernando Ruiz Thomas",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Technician",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 43.18,
    "bono": 500.0,
    "salarioBruto": 4127.12,
    "impuestosCA": 907.97,
    "salarioNeto": 3219.15,
    "estadoPago": "En Proceso",
    "correo": "fernando.ruiz119@pacificgeneralca.org"
  },
  {
    "id": "EMP-120",
    "nombre": "Diego Herrera Ramírez",
    "departamento": "Pediatrics",
    "puesto": "Pediatric Nurse (RN)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 56.41,
    "bono": 100.0,
    "salarioBruto": 4612.8,
    "impuestosCA": 1014.82,
    "salarioNeto": 3597.98,
    "estadoPago": "Pagado",
    "correo": "diego.herrera120@pacificgeneralca.org"
  },
  {
    "id": "EMP-121",
    "nombre": "Emily Jones Thomas",
    "departamento": "Pediatrics",
    "puesto": "Pediatrician (MD)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 72,
    "tarifaHora": 107.1,
    "bono": 100.0,
    "salarioBruto": 7811.2,
    "impuestosCA": 1718.46,
    "salarioNeto": 6092.74,
    "estadoPago": "Pagado",
    "correo": "emily.jones121@pacificgeneralca.org"
  },
  {
    "id": "EMP-122",
    "nombre": "Leonardo Herrera Rivera",
    "departamento": "Cardiology",
    "puesto": "Cardiologist (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 72,
    "tarifaHora": 142.8,
    "bono": 200.0,
    "salarioBruto": 10481.6,
    "impuestosCA": 2305.95,
    "salarioNeto": 8175.65,
    "estadoPago": "Pagado",
    "correo": "leonardo.herrera122@pacificgeneralca.org"
  },
  {
    "id": "EMP-123",
    "nombre": "Victoria Herrera Ramos",
    "departamento": "Cardiology",
    "puesto": "Cardiac Sonographer",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 53.61,
    "bono": 100.0,
    "salarioBruto": 4388.8,
    "impuestosCA": 965.54,
    "salarioNeto": 3423.26,
    "estadoPago": "Pendiente",
    "correo": "victoria.herrera123@pacificgeneralca.org"
  },
  {
    "id": "EMP-124",
    "nombre": "Elena Vargas Cruz",
    "departamento": "Radiology & Imaging",
    "puesto": "Radiologic Technologist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 45.82,
    "bono": 0.0,
    "salarioBruto": 4032.16,
    "impuestosCA": 887.08,
    "salarioNeto": 3145.08,
    "estadoPago": "En Proceso",
    "correo": "elena.vargas124@pacificgeneralca.org"
  },
  {
    "id": "EMP-125",
    "nombre": "Elizabeth Williams Hernández",
    "departamento": "Radiology & Imaging",
    "puesto": "MRI Specialist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 50.69,
    "bono": 0.0,
    "salarioBruto": 4055.2,
    "impuestosCA": 892.14,
    "salarioNeto": 3163.06,
    "estadoPago": "Pagado",
    "correo": "elizabeth.williams125@pacificgeneralca.org"
  },
  {
    "id": "EMP-126",
    "nombre": "Stephanie Taylor Martínez",
    "departamento": "Clinical Laboratory",
    "puesto": "Clinical Lab Scientist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 88,
    "tarifaHora": 49.37,
    "bono": 0.0,
    "salarioBruto": 4344.56,
    "impuestosCA": 955.8,
    "salarioNeto": 3388.76,
    "estadoPago": "Pagado",
    "correo": "stephanie.taylor126@pacificgeneralca.org"
  },
  {
    "id": "EMP-127",
    "nombre": "Samuel Rodríguez Wilson",
    "departamento": "Clinical Laboratory",
    "puesto": "Phlebotomist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 76,
    "tarifaHora": 29.67,
    "bono": 100.0,
    "salarioBruto": 2354.92,
    "impuestosCA": 518.08,
    "salarioNeto": 1836.84,
    "estadoPago": "Pagado",
    "correo": "samuel.rodriguez127@pacificgeneralca.org"
  },
  {
    "id": "EMP-128",
    "nombre": "Joseph Sánchez Jones",
    "departamento": "Hospital Pharmacy",
    "puesto": "Clinical Pharmacist (PharmD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 76,
    "tarifaHora": 79.44,
    "bono": 200.0,
    "salarioBruto": 6237.44,
    "impuestosCA": 1372.24,
    "salarioNeto": 4865.2,
    "estadoPago": "Pendiente",
    "correo": "joseph.sanchez128@pacificgeneralca.org"
  },
  {
    "id": "EMP-129",
    "nombre": "Stephanie Álvarez Flores",
    "departamento": "Hospital Pharmacy",
    "puesto": "Pharmacy Technician",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 33.25,
    "bono": 150.0,
    "salarioBruto": 2810.0,
    "impuestosCA": 618.2,
    "salarioNeto": 2191.8,
    "estadoPago": "En Proceso",
    "correo": "stephanie.alvarez129@pacificgeneralca.org"
  },
  {
    "id": "EMP-130",
    "nombre": "Nicole Sánchez Flores",
    "departamento": "Administration & HR",
    "puesto": "Payroll & HR Specialist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 35.97,
    "bono": 0.0,
    "salarioBruto": 2877.6,
    "impuestosCA": 633.07,
    "salarioNeto": 2244.53,
    "estadoPago": "Pagado",
    "correo": "nicole.sanchez130@pacificgeneralca.org"
  },
  {
    "id": "EMP-131",
    "nombre": "Natalia Jones Moore",
    "departamento": "Administration & HR",
    "puesto": "Medical Billing Coordinator",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 34.17,
    "bono": 500.0,
    "salarioBruto": 3233.6,
    "impuestosCA": 711.39,
    "salarioNeto": 2522.21,
    "estadoPago": "Pagado",
    "correo": "natalia.jones131@pacificgeneralca.org"
  },
  {
    "id": "EMP-132",
    "nombre": "Samuel López Miller",
    "departamento": "Health IT & Systems",
    "puesto": "HIS Systems Engineer",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 69.12,
    "bono": 0.0,
    "salarioBruto": 5806.08,
    "impuestosCA": 1277.34,
    "salarioNeto": 4528.74,
    "estadoPago": "Pagado",
    "correo": "samuel.lopez132@pacificgeneralca.org"
  },
  {
    "id": "EMP-133",
    "nombre": "Sebastián Jackson Chávez",
    "departamento": "Emergency Room (ER)",
    "puesto": "Registered Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 63.58,
    "bono": 0.0,
    "salarioBruto": 5595.04,
    "impuestosCA": 1230.91,
    "salarioNeto": 4364.13,
    "estadoPago": "Pendiente",
    "correo": "sebastian.jackson133@pacificgeneralca.org"
  },
  {
    "id": "EMP-134",
    "nombre": "Kevin Jones Martínez",
    "departamento": "Emergency Room (ER)",
    "puesto": "ER Physician (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 130.98,
    "bono": 500.0,
    "salarioBruto": 10978.4,
    "impuestosCA": 2415.25,
    "salarioNeto": 8563.15,
    "estadoPago": "En Proceso",
    "correo": "kevin.jones134@pacificgeneralca.org"
  },
  {
    "id": "EMP-135",
    "nombre": "Paula López Smith",
    "departamento": "Emergency Room (ER)",
    "puesto": "Triage Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 84,
    "tarifaHora": 40.73,
    "bono": 250.0,
    "salarioBruto": 3671.32,
    "impuestosCA": 807.69,
    "salarioNeto": 2863.63,
    "estadoPago": "Pagado",
    "correo": "paula.lopez135@pacificgeneralca.org"
  },
  {
    "id": "EMP-136",
    "nombre": "Brian Aguilar Pérez",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Critical Care Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 71.45,
    "bono": 500.0,
    "salarioBruto": 6216.0,
    "impuestosCA": 1367.52,
    "salarioNeto": 4848.48,
    "estadoPago": "Pagado",
    "correo": "brian.aguilar136@pacificgeneralca.org"
  },
  {
    "id": "EMP-137",
    "nombre": "Jacqueline Herrera Martin",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Intensivist (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 76,
    "tarifaHora": 138.06,
    "bono": 500.0,
    "salarioBruto": 10992.56,
    "impuestosCA": 2418.36,
    "salarioNeto": 8574.2,
    "estadoPago": "Pagado",
    "correo": "jacqueline.herrera137@pacificgeneralca.org"
  },
  {
    "id": "EMP-138",
    "nombre": "Jessica Taylor Ortiz",
    "departamento": "Intensive Care Unit (ICU)",
    "puesto": "Respiratory Therapist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 52.08,
    "bono": 350.0,
    "salarioBruto": 4516.4,
    "impuestosCA": 993.61,
    "salarioNeto": 3522.79,
    "estadoPago": "Pendiente",
    "correo": "jessica.taylor138@pacificgeneralca.org"
  },
  {
    "id": "EMP-139",
    "nombre": "Stephanie Medina Herrera",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 67.56,
    "bono": 150.0,
    "salarioBruto": 5554.8,
    "impuestosCA": 1222.06,
    "salarioNeto": 4332.74,
    "estadoPago": "En Proceso",
    "correo": "stephanie.medina139@pacificgeneralca.org"
  },
  {
    "id": "EMP-140",
    "nombre": "Elena Ramos Morales",
    "departamento": "Surgery & OR",
    "puesto": "Anesthesiologist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 88,
    "tarifaHora": 158.04,
    "bono": 200.0,
    "salarioBruto": 14107.52,
    "impuestosCA": 3103.65,
    "salarioNeto": 11003.87,
    "estadoPago": "Pagado",
    "correo": "elena.ramos140@pacificgeneralca.org"
  },
  {
    "id": "EMP-141",
    "nombre": "Eduardo Morales Herrera",
    "departamento": "Surgery & OR",
    "puesto": "Surgical Technician",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 41.49,
    "bono": 100.0,
    "salarioBruto": 3419.2,
    "impuestosCA": 752.22,
    "salarioNeto": 2666.98,
    "estadoPago": "Pagado",
    "correo": "eduardo.morales141@pacificgeneralca.org"
  },
  {
    "id": "EMP-142",
    "nombre": "Andrea Rodríguez Aguilar",
    "departamento": "Pediatrics",
    "puesto": "Pediatric Nurse (RN)",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 88,
    "tarifaHora": 53.9,
    "bono": 100.0,
    "salarioBruto": 4843.2,
    "impuestosCA": 1065.5,
    "salarioNeto": 3777.7,
    "estadoPago": "Pagado",
    "correo": "andrea.rodriguez142@pacificgeneralca.org"
  },
  {
    "id": "EMP-143",
    "nombre": "Victoria Mendoza Cruz",
    "departamento": "Pediatrics",
    "puesto": "Pediatrician (MD)",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 111.99,
    "bono": 350.0,
    "salarioBruto": 9309.2,
    "impuestosCA": 2048.02,
    "salarioNeto": 7261.18,
    "estadoPago": "Pendiente",
    "correo": "victoria.mendoza143@pacificgeneralca.org"
  },
  {
    "id": "EMP-144",
    "nombre": "Charles Ortiz Brown",
    "departamento": "Cardiology",
    "puesto": "Cardiologist (MD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 72,
    "tarifaHora": 150.5,
    "bono": 0.0,
    "salarioBruto": 10836.0,
    "impuestosCA": 2383.92,
    "salarioNeto": 8452.08,
    "estadoPago": "En Proceso",
    "correo": "charles.ortiz144@pacificgeneralca.org"
  },
  {
    "id": "EMP-145",
    "nombre": "Sofía Morales Lee",
    "departamento": "Cardiology",
    "puesto": "Cardiac Sonographer",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 50.89,
    "bono": 0.0,
    "salarioBruto": 4071.2,
    "impuestosCA": 895.66,
    "salarioNeto": 3175.54,
    "estadoPago": "Pagado",
    "correo": "sofia.morales145@pacificgeneralca.org"
  },
  {
    "id": "EMP-146",
    "nombre": "Charles Medina Taylor",
    "departamento": "Radiology & Imaging",
    "puesto": "Radiologic Technologist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 84,
    "tarifaHora": 49.91,
    "bono": 0.0,
    "salarioBruto": 4192.44,
    "impuestosCA": 922.34,
    "salarioNeto": 3270.1,
    "estadoPago": "Pagado",
    "correo": "charles.medina146@pacificgeneralca.org"
  },
  {
    "id": "EMP-147",
    "nombre": "Sofía Gutiérrez Reyes",
    "departamento": "Radiology & Imaging",
    "puesto": "MRI Specialist",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 80,
    "tarifaHora": 56.3,
    "bono": 100.0,
    "salarioBruto": 4604.0,
    "impuestosCA": 1012.88,
    "salarioNeto": 3591.12,
    "estadoPago": "Pagado",
    "correo": "sofia.gutierrez147@pacificgeneralca.org"
  },
  {
    "id": "EMP-148",
    "nombre": "Joseph Miller Álvarez",
    "departamento": "Clinical Laboratory",
    "puesto": "Clinical Lab Scientist",
    "turno": "Vespertino (15:00 - 23:00)",
    "horas": 80,
    "tarifaHora": 55.64,
    "bono": 100.0,
    "salarioBruto": 4551.2,
    "impuestosCA": 1001.26,
    "salarioNeto": 3549.94,
    "estadoPago": "Pendiente",
    "correo": "joseph.miller148@pacificgeneralca.org"
  },
  {
    "id": "EMP-149",
    "nombre": "Patricia Thompson Brown",
    "departamento": "Clinical Laboratory",
    "puesto": "Phlebotomist",
    "turno": "Nocturno (23:00 - 07:00)",
    "horas": 80,
    "tarifaHora": 30.46,
    "bono": 250.0,
    "salarioBruto": 2686.8,
    "impuestosCA": 591.1,
    "salarioNeto": 2095.7,
    "estadoPago": "En Proceso",
    "correo": "patricia.thompson149@pacificgeneralca.org"
  },
  {
    "id": "EMP-150",
    "nombre": "Elena Chávez Cruz",
    "departamento": "Hospital Pharmacy",
    "puesto": "Clinical Pharmacist (PharmD)",
    "turno": "Matutino (07:00 - 15:00)",
    "horas": 76,
    "tarifaHora": 73.93,
    "bono": 0.0,
    "salarioBruto": 5618.68,
    "impuestosCA": 1236.11,
    "salarioNeto": 4382.57,
    "estadoPago": "Pagado",
    "correo": "elena.chavez150@pacificgeneralca.org"
  }
];

let listaEmpleados = [];

document.addEventListener("DOMContentLoaded", () => {
  cargarDatos();
  configurarEventos();
  calcularPrevisualizacion();
  actualizarTodo();
});

function cargarDatos() {
  try {
    const guardado = localStorage.getItem("nomina_hospital_ca_150");
    if (guardado) {
      listaEmpleados = JSON.parse(guardado);
    } else {
      listaEmpleados = JSON.parse(JSON.stringify(DATOS_INICIALES_150));
    }
  } catch (e) {
    listaEmpleados = JSON.parse(JSON.stringify(DATOS_INICIALES_150));
  }
}

function guardarDatos() {
  try {
    localStorage.setItem("nomina_hospital_ca_150", JSON.stringify(listaEmpleados));
  } catch (e) {
    // Ignorar en modo restringido
  }
}

function configurarEventos() {
  ["emp-horas", "emp-tarifa", "emp-bono"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", calcularPrevisualizacion);
  });

  document.getElementById("btn-registrar").addEventListener("click", registrarEmpleado);
  document.getElementById("btn-actualizar").addEventListener("click", actualizarEmpleado);
  document.getElementById("btn-limpiar").addEventListener("click", limpiarFormulario);
  document.getElementById("btn-exportar-csv").addEventListener("click", exportarCSV);
  document.getElementById("btn-restaurar").addEventListener("click", restaurar150Empleados);

  document.getElementById("filtro-busqueda").addEventListener("input", renderizarTabla);
  document.getElementById("filtro-departamento").addEventListener("change", renderizarTabla);
  document.getElementById("filtro-estado").addEventListener("change", renderizarTabla);
}

function calcularMontos(horas, tarifa, bono) {
  const h = Number(horas) || 0;
  const t = Number(tarifa) || 0;
  const b = Number(bono) || 0;
  const bruto = Number((h * t + b).toFixed(2));
  const impuestos = Number((bruto * 0.22).toFixed(2));
  const neto = Number((bruto - impuestos).toFixed(2));
  return { bruto, impuestos, neto };
}

function calcularPrevisualizacion() {
  const h = document.getElementById("emp-horas").value;
  const t = document.getElementById("emp-tarifa").value;
  const b = document.getElementById("emp-bono").value;
  const C = calcularMontos(h, t, b);

  document.getElementById("prev-bruto").textContent = formatearUSD(C.bruto);
  document.getElementById("prev-impuestos").textContent = "-" + formatearUSD(C.impuestos);
  document.getElementById("prev-neto").textContent = formatearUSD(C.neto);
}

function obtenerDatosFormulario() {
  return {
    id: document.getElementById("emp-id").value.trim().toUpperCase(),
    nombre: document.getElementById("emp-nombre").value.trim(),
    departamento: document.getElementById("emp-departamento").value,
    puesto: document.getElementById("emp-puesto").value.trim(),
    turno: document.getElementById("emp-turno").value,
    horas: Number(document.getElementById("emp-horas").value) || 80,
    tarifaHora: Number(document.getElementById("emp-tarifa").value) || 50,
    bono: Number(document.getElementById("emp-bono").value) || 0,
    estadoPago: document.getElementById("emp-estado").value,
    correo: document.getElementById("emp-correo").value.trim() || "staff@pacificgeneralca.org"
  };
}

function registrarEmpleado() {
  const form = obtenerDatosFormulario();
  if (!form.nombre || !form.puesto) {
    mostrarToast("⚠️ Completa el Nombre Completo y el Puesto del empleado.");
    return;
  }

  const nuevoId = form.id || ("EMP-" + String(listaEmpleados.length + 1).padStart(3, "0"));
  if (listaEmpleados.some(e => e.id.toUpperCase() === nuevoId)) {
    mostrarToast("⚠️ El ID " + nuevoId + " ya existe. Usa el botón 'Actualizar ID'.");
    return;
  }

  const C = calcularMontos(form.horas, form.tarifaHora, form.bono);
  listaEmpleados.unshift({
    ...form,
    id: nuevoId,
    salarioBruto: C.bruto,
    impuestosCA: C.impuestos,
    salarioNeto: C.neto
  });

  guardarDatos();
  actualizarTodo();
  limpiarFormulario();
  mostrarToast("✅ Empleado " + nuevoId + " registrado en la nómina.");
}

function actualizarEmpleado() {
  const form = obtenerDatosFormulario();
  if (!form.id) {
    mostrarToast("⚠️ Primero haz clic en 'Editar' en algún empleado de la tabla.");
    return;
  }

  const idx = listaEmpleados.findIndex(e => e.id.toUpperCase() === form.id);
  if (idx === -1) {
    mostrarToast("⚠️ No se encontró ningún empleado con el ID " + form.id);
    return;
  }

  const C = calcularMontos(form.horas, form.tarifaHora, form.bono);
  listaEmpleados[idx] = {
    ...form,
    salarioBruto: C.bruto,
    impuestosCA: C.impuestos,
    salarioNeto: C.neto
  };

  guardarDatos();
  actualizarTodo();
  mostrarToast("✅ Nómina de " + form.id + " actualizada correctamente.");
}

function seleccionarEmpleado(idEmpleado) {
  const emp = listaEmpleados.find(e => e.id === idEmpleado);
  if (!emp) return;

  document.getElementById("emp-id").value = emp.id;
  document.getElementById("emp-nombre").value = emp.nombre;
  document.getElementById("emp-departamento").value = emp.departamento;
  document.getElementById("emp-puesto").value = emp.puesto;
  document.getElementById("emp-turno").value = emp.turno;
  document.getElementById("emp-horas").value = emp.horas;
  document.getElementById("emp-tarifa").value = emp.tarifaHora;
  document.getElementById("emp-bono").value = emp.bono;
  document.getElementById("emp-estado").value = emp.estadoPago;
  document.getElementById("emp-correo").value = emp.correo;

  calcularPrevisualizacion();
  mostrarToast("✏️ Editando a " + emp.id + " (" + emp.nombre + ")");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function eliminarEmpleado(idEmpleado) {
  listaEmpleados = listaEmpleados.filter(e => e.id !== idEmpleado);
  guardarDatos();
  actualizarTodo();
  mostrarToast("🗑️ Empleado " + idEmpleado + " eliminado.");
}

function restaurar150Empleados() {
  listaEmpleados = JSON.parse(JSON.stringify(DATOS_INICIALES_150));
  guardarDatos();
  actualizarTodo();
  mostrarToast("🔄 Se restauraron los 150 empleados originales del hospital.");
}

function limpiarFormulario() {
  document.getElementById("emp-id").value = "";
  document.getElementById("emp-nombre").value = "";
  document.getElementById("emp-puesto").value = "";
  document.getElementById("emp-horas").value = 80;
  document.getElementById("emp-tarifa").value = 58.50;
  document.getElementById("emp-bono").value = 150;
  document.getElementById("emp-correo").value = "";
  calcularPrevisualizacion();
}

function actualizarTodo() {
  actualizarKPIs();
  renderizarTabla();
  renderizarDepartamentos();
}

function actualizarKPIs() {
  const total = listaEmpleados.length;
  const bruto = listaEmpleados.reduce((a, e) => a + Number(e.salarioBruto || 0), 0);
  const imp = listaEmpleados.reduce((a, e) => a + Number(e.impuestosCA || 0), 0);
  const neto = listaEmpleados.reduce((a, e) => a + Number(e.salarioNeto || 0), 0);

  document.getElementById("kpi-total-empleados").textContent = total;
  document.getElementById("kpi-nomina-bruta").textContent = formatearUSD(bruto);
  document.getElementById("kpi-impuestos").textContent = formatearUSD(imp);
  document.getElementById("kpi-nomina-neta").textContent = formatearUSD(neto);
}

function renderizarTabla() {
  const texto = document.getElementById("filtro-busqueda").value.trim().toLowerCase();
  const depto = document.getElementById("filtro-departamento").value;
  const estado = document.getElementById("filtro-estado").value;

  const filtrados = listaEmpleados.filter(e => {
    const coincideTexto =
      e.id.toLowerCase().includes(texto) ||
      e.nombre.toLowerCase().includes(texto) ||
      e.puesto.toLowerCase().includes(texto) ||
      e.correo.toLowerCase().includes(texto);
    const coincideDepto = (depto === "TODOS") || (e.departamento === depto);
    const coincideEstado = (estado === "TODOS") || (e.estadoPago === estado);
    return coincideTexto && coincideDepto && coincideEstado;
  });

  document.getElementById("contador-filtrados").textContent = filtrados.length;
  const tbody = document.getElementById("cuerpo-tabla-nomina");

  tbody.innerHTML = filtrados.map(e => {
    const badge = e.estadoPago === "Pagado" ? "badge-Pagado" :
                  (e.estadoPago === "Pendiente" ? "badge-Pendiente" : "badge-Proceso");
    return `
      <tr>
        <td>
          <button type="button" class="btn-accion" onclick="seleccionarEmpleado('${e.id}')">✏️ Editar</button>
          <button type="button" class="btn-accion eliminar" onclick="eliminarEmpleado('${e.id}')">✕</button>
        </td>
        <td><strong>${e.id}</strong></td>
        <td>
          <div><strong>${e.nombre}</strong></div>
          <small style="color:#64748b;">${e.correo}</small>
        </td>
        <td>${e.departamento}</td>
        <td>${e.puesto}</td>
        <td>${e.turno}</td>
        <td>${e.horas}h</td>
        <td>$${Number(e.tarifaHora).toFixed(2)}</td>
        <td>$${Number(e.bono).toFixed(2)}</td>
        <td><strong>${formatearUSD(e.salarioBruto)}</strong></td>
        <td style="color:#b91c1c;">-${formatearUSD(e.impuestosCA)}</td>
        <td style="color:#15803d; font-weight:800;">${formatearUSD(e.salarioNeto)}</td>
        <td><span class="badge-estado ${badge}">${e.estadoPago}</span></td>
      </tr>
    `;
  }).join("");
}

function renderizarDepartamentos() {
  const mapa = {};
  listaEmpleados.forEach(e => {
    if (!mapa[e.departamento]) {
      mapa[e.departamento] = { cantidad: 0, netoTotal: 0 };
    }
    mapa[e.departamento].cantidad += 1;
    mapa[e.departamento].netoTotal += Number(e.salarioNeto || 0);
  });

  const contenedor = document.getElementById("contenedor-departamentos");
  contenedor.innerHTML = Object.entries(mapa).map(([nombreDepto, info]) => `
    <div class="depto-card">
      <h4>${nombreDepto}</h4>
      <p>👥 <strong>${info.cantidad}</strong> empleados activos</p>
      <p>💵 Nómina Neta: <strong style="color:#0369a1;">${formatearUSD(info.netoTotal)}</strong></p>
    </div>
  `).join("");
}

function exportarCSV() {
  const encabezados = [
    "ID_Empleado", "Nombre_Completo", "Departamento", "Puesto", "Turno",
    "Horas_Quincena", "Tarifa_Hora_USD", "Bono_Guardia_USD",
    "Salario_Bruto_USD", "Impuestos_CA_USD", "Salario_Neto_USD",
    "Estado_Pago", "Correo_Institucional"
  ];
  const filas = listaEmpleados.map(e => [
    e.id, `"${e.nombre}"`, `"${e.departamento}"`, `"${e.puesto}"`, `"${e.turno}"`,
    e.horas, e.tarifaHora, e.bono, e.salarioBruto, e.impuestosCA, e.salarioNeto,
    e.estadoPago, e.correo
  ].join(","));

  const contenido = [encabezados.join(","), ...filas].join("\n");
  const blob = new Blob([contenido], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "nomina_hospital_california_150.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  mostrarToast("⬇️ Archivo CSV descargado.");
}

function formatearUSD(valor) {
  return "$" + Number(valor || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

let timerToast = null;
function mostrarToast(msg) {
  const el = document.getElementById("toast-msg");
  el.textContent = msg;
  el.classList.add("activo");
  if (timerToast) clearTimeout(timerToast);
  timerToast = setTimeout(() => el.classList.remove("activo"), 3200);
}

window.seleccionarEmpleado = seleccionarEmpleado;
window.eliminarEmpleado = eliminarEmpleado;
