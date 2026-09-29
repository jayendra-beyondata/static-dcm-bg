export const bgRecords = [
  {
    "id": "95ddba28-c411-4e96-b7f0-cc06246daaf7",
    "bgReferenceId": "BG\\2026\\09012",
    "bgType": "ABG",
    "version": 1,
    "fileName": "Amrita ABG-format.docx",
    "status": "READY_FOR_REVIEW",
    "overallScore": 72,
    "riskLevel": "MEDIUM",
    "uploadedByName": "Mahesh Uploader",
    "createdAt": "2026-09-15T10:22:38.175Z",
    "updatedAt": "2026-09-17T10:39:24.579Z",
    "history": [
      {
        "type": "CREATED",
        "at": "2026-09-15T10:22:38.160Z",
        "by": "Mahesh Uploader",
        "version": 1
      },
      {
        "type": "SENT_FOR_APPROVAL",
        "at": "2026-09-17T10:39:24.575Z",
        "by": "Super Admin",
        "chainId": "83d7fb50-f06d-4972-9652-d5408388ae39",
        "level": 1
      }
    ],
    "comparison": {
      "reference_count": 6,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 72,
        "summary": "The submitted BG is conditionally approved with several deviations from the standard template. Some deviations have approved precedents, while others are new and pose moderate legal risks. Key issues include the addition of clauses on Employer discretion and the lack of a clear expiration date.",
        "key_findings": [
          {
            "category": "Employer Discretion Clause",
            "status": "MODIFIED",
            "standard_clause": "The Owner's decision on all matters concerning the terms and requirements of the contract and the default/breach thereof by the contractor shall be final and binding on the Bank.",
            "submitted_clause": "The Employer shall have the fullest liberty... to vary any of the terms and conditions of the Work order... and the decision of the Employer in this regard shall be final and binding on the Bank.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "MEDIUM",
            "recommendation": "Ensure the clause is consistent with the standard template's emphasis on the Owner's finality."
          },
          {
            "category": "Guarantee Expiry Clause",
            "status": "MISSING",
            "standard_clause": "The Guarantee shall come into force from the date contractor receives from owner the said advance amount. The Guarantee shall remain in full force up to 31-01-2027.",
            "submitted_clause": "The guarantee provided herein, shall remain in full force and effect during the period of the Contract and up till the period the Mobilization Advance has been fully recovered/ adjusted and claims satisfied or discharged, and until the Employer certifies, in writing, that the Mobilization Advance has been fully recovered from the Contractor by the Employer.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include a clear expiry date as per the standard template to avoid ambiguity."
          },
          {
            "category": "Unconditional Payment Clause",
            "status": "MODIFIED",
            "standard_clause": "We, the Guarantors absolutely, irrevocably and unconditionally agree that (a) the Owner shall be entitled to enforce this Guarantee without making any demand on or taking any proceedings against the Contractor.",
            "submitted_clause": "It shall not be necessary for the Employer to proceed against the Contractor before proceeding against the Bank, and the guarantee herein contained shall be enforceable against the Bank, notwithstanding any security, which the Employer may have obtained or obtain from the Contractor at the time when proceedings are taken against the Bank hereunder, be outstanding or unrealized.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "LOW",
            "recommendation": "Ensure the clause aligns with the standard template's emphasis on unconditional enforceability."
          },
          {
            "category": "Governing Law and Jurisdiction",
            "status": "MODIFIED",
            "standard_clause": "This Bank Guarantee is governed by and construed in accordance with, the laws of India and New Delhi shall be exclusive jurisdiction.",
            "submitted_clause": "This guarantee shall be interpreted in accordance with the laws of India, and the courts at New Delhi shall have exclusive jurisdiction.",
            "approved_precedent": true,
            "precedent_source": "Standard Template",
            "impact": "LOW",
            "recommendation": "Maintain consistency with the standard template's jurisdiction clause."
          },
          {
            "category": "Payment Terms",
            "status": "MODIFIED",
            "standard_clause": "We shall forthwith within five days of the Owner notifying in writing such default or breach to us (such notification to be conclusive as to default and breach), make payment to the Owner without any protest, objection or demur of the said sum.",
            "submitted_clause": "The Bank shall, unequivocally, unconditionally and irrevocably undertake to pay the amounts payable under this guarantee without any demur, merely upon receipt of a demand, in writing, from the Employer.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "LOW",
            "recommendation": "Ensure the payment terms are consistent with the standard template's requirement for prompt payment."
          }
        ],
        "missing_clauses": [
          "Guarantee Expiry Clause"
        ],
        "critical_deviations": [
          "Guarantee Expiry Clause"
        ],
        "acceptable_deviations": [
          "Employer Discretion Clause",
          "Unconditional Payment Clause",
          "Governing Law and Jurisdiction",
          "Payment Terms"
        ],
        "new_deviations": [
          "Guarantee Expiry Clause"
        ],
        "legal_risks": [
          "Ambiguity in guarantee expiry date",
          "Potential for extended liability beyond the contract period",
          "Lack of clear expiry date leading to indefinite liability"
        ],
        "action_items": [
          "Include a clear expiry date as per the standard template.",
          "Review and align the Employer Discretion Clause with the standard template's emphasis on finality.",
          "Ensure the payment terms are consistent with the standard template's requirement for prompt payment."
        ],
        "detailed_comparison": {
          "beneficiary_details": "Compliant with the standard template, with minor modifications in the Employer's discretion clause.",
          "guarantee_amount": "Compliant with the standard template, with the same amount of Rs. 27,00,009/-.",
          "validity_period": "Non-compliant; the submitted BG lacks a clear expiry date, while the standard template specifies a fixed expiry date.",
          "invocation_clause": "Compliant with the standard template, with minor modifications in the Employer's discretion clause.",
          "governing_law": "Compliant with the standard template, with minor wording differences.",
          "dispute_resolution": "Compliant with the standard template, with minor modifications in the Employer's discretion clause.",
          "payment_terms": "Compliant with the standard template, with minor modifications in the Employer's discretion clause.",
          "unconditional_clause": "Compliant with the standard template, with minor modifications in the Employer's discretion clause."
        }
      }
    }
  },
  {
    "id": "1d9651b6-9358-413c-97df-7a84c2547b1b",
    "bgReferenceId": "BG\\2026\\09011",
    "bgType": "ABG",
    "version": 1,
    "fileName": "Capacite ABG.docx",
    "status": "APPROVED",
    "overallScore": 68,
    "riskLevel": "MEDIUM",
    "uploadedByName": "Mahesh Uploader",
    "createdAt": "2026-09-15T09:54:43.403Z",
    "updatedAt": "2026-09-15T09:55:29.952Z",
    "history": [
      {
        "type": "CREATED",
        "at": "2026-09-15T09:54:43.378Z",
        "by": "Mahesh Uploader",
        "version": 1
      },
      {
        "type": "APPROVED",
        "at": "2026-09-15T09:55:29.945Z",
        "by": "Super Admin"
      }
    ],
    "comparison": {
      "reference_count": 6,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 68,
        "summary": "The submitted BG is conditionally approved with several deviations from the standard template. Some deviations have approved precedents, but others introduce new risks that require further review and clarification.",
        "key_findings": [
          {
            "category": "Beneficiary Details",
            "status": "MODIFIED",
            "standard_clause": "Owner (which expression shall unless repugnant to the context or meaning thereof be deemed to mean and include its successors and assigners) having accepted the tender of Fenesta building systems (A Unit of M/s. DCM Shriram Ltd) ...",
            "submitted_clause": "CAPACITE INFRAPROJECTS LTD ... having its office at ... (herein after referred to as 'Beneficiary')",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #2: Capacite ABG",
            "impact": "LOW",
            "recommendation": "Ensure beneficiary details are fully aligned with the standard template for clarity and consistency."
          },
          {
            "category": "Guarantee Amount",
            "status": "MODIFIED",
            "standard_clause": "Rs. 583,349.57 (FIVE LAKH EIGHTY THREE THOUSAND THREE HUNDRED AND FORTY TEN AND PAISE ONE RUPEES)",
            "submitted_clause": "Rs.60,978/- (Rupees Sixty Thousand Nine Hundred Seventy Eight only)",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #2: Capacite ABG",
            "impact": "LOW",
            "recommendation": "Ensure the guarantee amount is clearly stated in full words and numeric format as per the standard template."
          },
          {
            "category": "Validity Period",
            "status": "MODIFIED",
            "standard_clause": "The Guarantee shall come into force from the date contractor receives from owner the said advance amount. ... shall remain in full force up to 31-01-2027",
            "submitted_clause": "This guarantee shall remain in full force up to 30.09.2022 and can be invoked by only a written demand under this guarantee served on the bank on or before the end of period ended up to 30.09.2022",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #2: Capacite ABG",
            "impact": "LOW",
            "recommendation": "Ensure the validity period is clearly defined and aligns with the standard template's structure."
          },
          {
            "category": "Invoking Clause",
            "status": "MODIFIED",
            "standard_clause": "We shall forthwith within five days of the Owner notifying in writing such default or breach to us ... make payment to the Owner without any protest, objection or demur ...",
            "submitted_clause": "This guarantee is issued subject to the condition of the liability of the bank under this guarantee is limited to a maximum of Rs.60,978/- ... can be invoked by only a written demand under this guarantee served on the bank on or before the end of period ended up to 30.09.2022",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #2: Capacite ABG",
            "impact": "LOW",
            "recommendation": "Ensure the invocation clause is clearly defined and aligns with the standard template's structure."
          },
          {
            "category": "Governing Law",
            "status": "MODIFIED",
            "standard_clause": "This Bank Guarantee is governed by and construed in accordance with, the laws of India and New Delhi shall be exclusive jurisdiction.",
            "submitted_clause": "The Bank further agrees that CAPACITE INFRAPROJECTS LTD. shall be the sole judge of whether the contractor has committed any breach ... and the extent of loss, damages or costs ...",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Clarify the governing law and jurisdiction to align with the standard template."
          },
          {
            "category": "Dispute Resolution",
            "status": "MODIFIED",
            "standard_clause": "The decision of the Owner on all the matters concerning the terms and the requirements of the contract and the default/breach thereof by the contractor shall be final and binding on the Bank and the Bank shall not refer any such matter to the Contractor.",
            "submitted_clause": "CAPACITE INFRAPROJECTS LTD. shall be the sole judge of whether the contractor has committed any breach ... and the extent of loss, damages or costs ...",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Ensure the dispute resolution clause is clearly defined and aligns with the standard template."
          },
          {
            "category": "Payment Terms",
            "status": "MODIFIED",
            "standard_clause": "We shall forthwith within five days of the Owner notifying in writing such default or breach to us (such notification to be conclusive as to default and breach), make payment to the Owner without any protest, objection or demur ...",
            "submitted_clause": "In consideration of the foregoing and at the request of the contractor, the bank hereby guarantee as a direct responsibility to pay to CAPACITE INFRAPROJECTS LTD. an amount up to a total sum of Rs.60,978/- ... immediately on demand by CAPACITE INFRAPROJECTS LTD. without demur, and without recourse to the contractor ...",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #2: Capacite ABG",
            "impact": "LOW",
            "recommendation": "Ensure the payment terms are clearly defined and align with the standard template."
          },
          {
            "category": "Unconditional Clause",
            "status": "MODIFIED",
            "standard_clause": "We, the Guarantors absolutely, irrevocably and unconditionally agree that (a) the Owner shall be entitled to enforce this Guarantee without making any demand on or taking any proceedings against the Contractor.",
            "submitted_clause": "The Bank further agrees that CAPACITE INFRAPROJECTS LTD. shall be the sole judge of whether the contractor has committed any breach ... and the extent of loss, damages or costs ...",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Ensure the unconditional clause is clearly defined and aligns with the standard template."
          }
        ],
        "missing_clauses": [
          "The Bank shall not refer any such matter to the Contractor.",
          "The Bank shall indemnify the Owner and keep the Owner indemnified against all costs, charges, and expenses whatsoever which the Owner has incurred by reason of any such default/breach on the part of the Contractor.",
          "The Bank shall not be discharged or released or altered or impaired in any manner by any change in the constitution, structures or powers of the Contractor or amalgamations, mergers etc."
        ],
        "critical_deviations": [
          "The governing law and jurisdiction clause is not aligned with the standard template."
        ],
        "acceptable_deviations": [
          "Guarantee amount and validity period are aligned with approved references."
        ],
        "new_deviations": [
          "The dispute resolution clause is not aligned with the standard template and introduces new risk."
        ],
        "legal_risks": [
          "The dispute resolution clause may lead to ambiguity in the enforcement of the guarantee.",
          "The governing law and jurisdiction clause may not be aligned with the standard template, leading to potential legal challenges."
        ],
        "action_items": [
          "Clarify the governing law and jurisdiction to align with the standard template.",
          "Ensure the dispute resolution clause is clearly defined and aligns with the standard template.",
          "Review and confirm the payment terms and invocation clause to ensure compliance with the standard template."
        ],
        "detailed_comparison": {
          "beneficiary_details": "Submitted BG modifies the beneficiary details to align with the standard template, but lacks the full legal structure of the standard template.",
          "guarantee_amount": "Submitted BG modifies the guarantee amount to align with the standard template, but lacks the full numeric and word format as required.",
          "validity_period": "Submitted BG modifies the validity period to align with the standard template, but lacks the full structure of the standard template.",
          "invocation_clause": "Submitted BG modifies the invocation clause to align with the standard template, but lacks the full structure of the standard template.",
          "governing_law": "Submitted BG introduces a new clause that is not aligned with the standard template, introducing a potential legal risk.",
          "dispute_resolution": "Submitted BG introduces a new clause that is not aligned with the standard template, introducing a potential legal risk.",
          "payment_terms": "Submitted BG modifies the payment terms to align with the standard template, but lacks the full structure of the standard template.",
          "unconditional_clause": "Submitted BG introduces a new clause that is not aligned with the standard template, introducing a potential legal risk."
        }
      }
    }
  },
  {
    "id": "8a63dee3-acf0-4fb6-a133-a922cc6c172b",
    "bgReferenceId": "BG\\2026\\09010",
    "bgType": "PBG",
    "version": 1,
    "fileName": "Man Vastucon.docx",
    "status": "APPROVED",
    "overallScore": 72,
    "riskLevel": "MEDIUM",
    "uploadedByName": "Nimesh Uploader",
    "createdAt": "2026-09-11T10:02:28.527Z",
    "updatedAt": "2026-09-15T10:00:07.503Z",
    "history": [
      {
        "type": "CREATED",
        "at": "2026-09-11T10:02:28.514Z",
        "by": "Nimesh Uploader"
      },
      {
        "type": "APPROVED",
        "at": "2026-09-15T10:00:07.500Z",
        "by": "Super Admin"
      }
    ],
    "comparison": {
      "reference_count": 7,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 72,
        "summary": "The submitted Performance Bank Guarantee (PBG) is mostly compliant with the standard template and approved references, but contains several deviations that require careful review. Some deviations have approved precedents, while others are new and pose potential legal risks.",
        "key_findings": [
          {
            "category": "Guarantee Amount",
            "status": "MODIFIED",
            "standard_clause": "The guarantee amount is specified as 5% of the contract value, e.g., Rs. 61,948.00/- (SIXTY ONE THOUSAND NINE HUNDRED AND FORTY EIGHT RUPEES).",
            "submitted_clause": "The guarantee amount is specified as Rs. 45,97,802/- (Rupees Forty Five Lakhs Ninety Seven Thousand Eight Hundred Two Only).",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #3: Man Vastucon",
            "impact": "MEDIUM",
            "recommendation": "Ensure the guarantee amount is clearly stated as 5% of the contract value and matches the contract terms."
          },
          {
            "category": "Validity Period",
            "status": "MODIFIED",
            "standard_clause": "The guarantee is valid up to 31-01-2027.",
            "submitted_clause": "The guarantee is valid up to 31st December, 2027.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #3: Man Vastucon",
            "impact": "LOW",
            "recommendation": "Ensure the validity period is clearly defined and aligns with the contract terms."
          },
          {
            "category": "Unconditional Clause",
            "status": "MODIFIED",
            "standard_clause": "The guarantee is unconditional and irrevocable.",
            "submitted_clause": "The Bank hereby agrees unequivocally, unconditionally and irrevocably guarantees the due and punctual performance...",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #3: Man Vastucon",
            "impact": "LOW",
            "recommendation": "Ensure the unconditional clause is clearly stated and matches the standard template."
          },
          {
            "category": "Payment Terms",
            "status": "MODIFIED",
            "standard_clause": "The Bank shall pay upon written demand from the Owner, without requiring proof or justification.",
            "submitted_clause": "The Bank shall make payment hereunder on first demand by the Employer without any demur, reservation, protest, restriction or conditions.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #3: Man Vastucon",
            "impact": "LOW",
            "recommendation": "Ensure the payment terms are clearly defined and match the standard template."
          },
          {
            "category": "Dispute Resolution",
            "status": "MISSING",
            "standard_clause": "The guarantee is governed by the laws of India and subject to the exclusive jurisdiction of the courts of New Delhi.",
            "submitted_clause": "The Guarantee herein contained shall not be determined or in any way prejudiced or affected by any change in the constitution of the Bank or by any merger, or amalgamation or reconstruction of the Bank but shall be enforceable against the merged...",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include a clear governing law and dispute resolution clause as per the standard template."
          },
          {
            "category": "Invoking Clause",
            "status": "MODIFIED",
            "standard_clause": "The Owner may invoke the guarantee upon written demand stating the breach.",
            "submitted_clause": "A demand so made by the Employer shall be final and binding on the Bank.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #3: Man Vastucon",
            "impact": "LOW",
            "recommendation": "Ensure the invoking clause is clearly defined and matches the standard template."
          },
          {
            "category": "Force Majeure",
            "status": "MISSING",
            "standard_clause": "Force Majeure is defined and limits liability.",
            "submitted_clause": "Not applicable in the submitted BG.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Include a Force Majeure clause as per the standard template."
          },
          {
            "category": "Assignment Clause",
            "status": "MODIFIED",
            "standard_clause": "The guarantee is not assignable by the Owner.",
            "submitted_clause": "The Guarantee herein contained shall not be determined or in any way prejudiced or affected by any change in the constitution of the Bank or by any merger, or amalgamation or reconstruction of the Bank but shall be enforceable against the merged...",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Include an assignment clause as per the standard template."
          }
        ],
        "missing_clauses": [
          "Dispute Resolution",
          "Force Majeure",
          "Assignment Clause"
        ],
        "critical_deviations": [
          "Dispute Resolution",
          "Force Majeure",
          "Assignment Clause"
        ],
        "acceptable_deviations": [
          "Guarantee Amount",
          "Validity Period",
          "Unconditional Clause",
          "Payment Terms",
          "Invoking Clause"
        ],
        "new_deviations": [
          "Dispute Resolution",
          "Force Majeure",
          "Assignment Clause"
        ],
        "legal_risks": [
          "Lack of governing law and dispute resolution clause",
          "Missing Force Majeure clause",
          "Missing assignment clause"
        ],
        "action_items": [
          "Review and include a governing law and dispute resolution clause as per the standard template.",
          "Include a Force Majeure clause as per the standard template.",
          "Include an assignment clause as per the standard template.",
          "Ensure the guarantee amount is clearly stated as 5% of the contract value.",
          "Ensure the validity period is clearly defined and aligns with the contract terms."
        ],
        "detailed_comparison": {
          "beneficiary_details": "The submitted BG includes the Employer and Contractor details, which is compliant with the standard template.",
          "guarantee_amount": "The submitted BG specifies the guarantee amount as Rs. 45,97,802/-, which is compliant with the standard template and has an approved precedent.",
          "validity_period": "The submitted BG specifies the validity period as 31st December, 2027, which is compliant with the standard template and has an approved precedent.",
          "invocation_clause": "The submitted BG includes an invocation clause, which is compliant with the standard template and has an approved precedent.",
          "governing_law": "The submitted BG lacks a governing law clause, which is a deviation and has no approved precedent.",
          "dispute_resolution": "The submitted BG lacks a dispute resolution clause, which is a deviation and has no approved precedent.",
          "payment_terms": "The submitted BG includes payment terms, which is compliant with the standard template and has an approved precedent.",
          "unconditional_clause": "The submitted BG includes an unconditional clause, which is compliant with the standard template and has an approved precedent."
        }
      }
    }
  },
  {
    "id": "c5f765c5-0ad1-4a79-856c-192ef6a9bd31",
    "bgReferenceId": "BG\\2026\\09009",
    "bgType": "ABG",
    "version": 1,
    "fileName": "Shapoorji  ABG FORMAT.docx",
    "status": "READY_FOR_REVIEW",
    "overallScore": 68,
    "riskLevel": "MEDIUM",
    "uploadedByName": "Super Admin",
    "createdAt": "2026-09-11T05:36:49.965Z",
    "updatedAt": "2026-09-11T05:36:49.965Z",
    "history": [
      {
        "type": "CREATED",
        "at": "2026-09-11T05:36:49.949Z",
        "by": "Super Admin"
      }
    ],
    "comparison": {
      "reference_count": 6,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 68,
        "summary": "The submitted BG contains several deviations from the standard template, some of which have approved precedents in reference BGs, while others are new and pose potential legal risks. Conditional approval is granted with specific recommendations to mitigate risks.",
        "key_findings": [
          {
            "category": "Beneficiary Details",
            "status": "MODIFIED",
            "standard_clause": "Owner (which expression shall unless repugnant to the context or meaning thereof be deemed to mean and include its successors and assigners) having accepted the tender of Fenesta building systems (A Unit of M/s. DCM Shriram Ltd) ...",
            "submitted_clause": "M/s. Shapoorji Pallonji and Company Private Limited Its Branch Office at 7th floor , Surya Chambers, No. 124 , HAL Airport Road , Bangalore – 560017 and having its Regd. Office at Nagindas Master Road, Fort, Mumbai – 400001 Maharashtra (hereinafter referred as “the Contractor” ...",
            "approved_precedent": true,
            "precedent_source": "Approved Reference #5",
            "impact": "MEDIUM",
            "recommendation": "Ensure that the beneficiary details are clearly defined and match the standard template's structure."
          },
          {
            "category": "Guarantee Amount",
            "status": "MODIFIED",
            "standard_clause": "we shall forthwith within five days of the Owner notifying in writing such default or breach to us ... make payment to the Owner without any protest, objection or demur of the said sum of Rs. 583,349.57 ...",
            "submitted_clause": "We, (Bank Name), a Banking Company ... hereby irrevocably undertake to pay you, the Beneficiary/Contractor, any sum or sums not exceeding in total the amount of Rs. XXXX/- Rs. XXX Only ) upon receipt by us of your demand in writing ...",
            "approved_precedent": true,
            "precedent_source": "Approved Reference #5",
            "impact": "MEDIUM",
            "recommendation": "Ensure the guarantee amount is clearly specified and matches the standard template's format."
          },
          {
            "category": "Validity Period",
            "status": "MODIFIED",
            "standard_clause": "The Guarantee shall come into force from the date contractor receives from owner the said advance amount. ... The Guarantee shall remain in full force up to 31-01-2027 ...",
            "submitted_clause": "This guarantee shall become effective from the BG issue date. ... This Bank Guarantee shall be valid upto XX.XX.20XX ; and",
            "approved_precedent": true,
            "precedent_source": "Approved Reference #5",
            "impact": "MEDIUM",
            "recommendation": "Ensure the validity period is clearly defined and matches the standard template's format."
          },
          {
            "category": "Invoking Clause",
            "status": "MODIFIED",
            "standard_clause": "We, the Guarantors absolutely, irrevocably and unconditionally agree that (a) the Owner shall be entitled to enforce this Guarantee without making any demand on or taking any proceedings against the Contractor. (b) the Guarantee herein contained shall be a continuing guarantee ...",
            "submitted_clause": "We, (Bank Name), a Banking Company ... hereby irrevocably undertake to pay you, the Beneficiary/Contractor, any sum or sums not exceeding in total the amount of Rs. XXXX/- Rs. XXX Only ) upon receipt by us of your demand in writing and your written statement stating that the Subcontractor ...",
            "approved_precedent": true,
            "precedent_source": "Approved Reference #5",
            "impact": "MEDIUM",
            "recommendation": "Ensure the invocation clause is clearly defined and matches the standard template's format."
          },
          {
            "category": "Governing Law",
            "status": "MODIFIED",
            "standard_clause": "This Bank Guarantee shall be governed by and construed in accordance with, the laws of India and New Delhi shall be exclusive jurisdiction.",
            "submitted_clause": "This Guarantee shall be governed by the Laws of India.",
            "approved_precedent": true,
            "precedent_source": "Approved Reference #5",
            "impact": "LOW",
            "recommendation": "Ensure the governing law clause is clearly defined and matches the standard template's format."
          },
          {
            "category": "Dispute Resolution",
            "status": "MISSING",
            "standard_clause": "The decision of the Owner on all the matters concerning the terms and the requirements of the contract and the default/breach thereof by the contractor shall be final and binding on the Bank and the Bank shall not refer any such matter to the Contractor.",
            "submitted_clause": "",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include a clear dispute resolution clause to avoid ambiguity and ensure compliance with the standard template."
          },
          {
            "category": "Payment Terms",
            "status": "MODIFIED",
            "standard_clause": "we shall forthwith within five days of the Owner notifying in writing such default or breach to us (such notification to be conclusive as to default and breach), make payment to the Owner without any protest, objection or demur of the said sum ...",
            "submitted_clause": "We, (Bank Name), a Banking Company ... hereby irrevocably undertake to pay you, the Beneficiary/Contractor, any sum or sums not exceeding in total the amount of Rs. XXXX/- Rs. XXX Only ) upon receipt by us of your demand in writing and your written statement stating that the Subcontractor ...",
            "approved_precedent": true,
            "precedent_source": "Approved Reference #5",
            "impact": "MEDIUM",
            "recommendation": "Ensure the payment terms are clearly defined and match the standard template's format."
          },
          {
            "category": "Unconditional Clause",
            "status": "MODIFIED",
            "standard_clause": "We, the Guarantors absolutely, irrev, unconditionally agree that (a) the Owner shall be entitled to enforce this Guarantee without making any demand on or taking any proceedings against the Contractor.",
            "submitted_clause": "We, (Bank Name), a Banking Company ... hereby irrevocably undertake to pay you, the Beneficiary/Contractor, any sum or sums not exceeding in total the amount of Rs. XXXX/- Rs. XXX Only ) upon receipt by us of your demand in writing and your written statement stating that the Subcontractor ...",
            "approved_precedent": true,
            "precedent_source": "Approved Reference #5",
            "impact": "MEDIUM",
            "recommendation": "Ensure the unconditional clause is clearly defined and matches the standard template's format."
          }
        ],
        "missing_clauses": [
          "Dispute Resolution Clause"
        ],
        "critical_deviations": [
          "Dispute Resolution Clause"
        ],
        "acceptable_deviations": [
          "Beneficiary Details",
          "Guarantee Amount",
          "Validity Period",
          "Invoking Clause",
          "Governing Law",
          "Payment Terms",
          "Unconditional Clause"
        ],
        "new_deviations": [],
        "legal_risks": [
          "Ambiguity in dispute resolution",
          "Potential for misinterpretation of payment terms",
          "Lack of clarity in beneficiary details"
        ],
        "action_items": [
          "Include a clear dispute resolution clause as per the standard template.",
          "Ensure the guarantee amount is clearly specified and matches the standard template's format.",
          "Verify that the validity period is clearly defined and matches the standard template's format.",
          "Ensure the invocation clause is clearly defined and matches the standard template's format.",
          "Ensure the governing law clause is clearly defined and matches the standard template's format."
        ],
        "detailed_comparison": {
          "beneficiary_details": "Submitted BG modifies the beneficiary details to include the Subcontractor, which is not in line with the standard template's structure. Approved Reference #5 has a similar structure.",
          "guarantee_amount": "Submitted BG specifies the guarantee amount as not exceeding a certain amount, which is similar to Approved Reference #5.",
          "validity_period": "Submitted BG specifies the validity period as up to a certain date, which is similar to Approved Reference #5.",
          "invocation_clause": "Submitted BG specifies the invocation clause as requiring a written demand and statement, which is similar to Approved Reference #5.",
          "governing_law": "Submitted BG specifies the governing law as the Laws of India, which is similar to Approved Reference #5.",
          "dispute_resolution": "Submitted BG lacks a dispute resolution clause, which is a critical deviation and not present in any approved reference.",
          "payment_terms": "Submitted BG specifies the payment terms as requiring a written demand and statement, which is similar to Approved Reference #5.",
          "unconditional_clause": "Submitted BG specifies the unconditional clause as requiring a written demand and statement, which is similar to Approved Reference #5."
        }
      }
    }
  },
  {
    "id": "ccd9268e-2b43-4444-8371-a1cbfbc9bd53",
    "bgReferenceId": "BG\\2026\\09008",
    "bgType": "ABG",
    "version": 1,
    "fileName": "TATA ABG (2).doc",
    "status": "APPROVED",
    "overallScore": 68,
    "riskLevel": "MEDIUM",
    "uploadedByName": "jay admin",
    "createdAt": "2026-09-08T10:46:20.829Z",
    "updatedAt": "2026-09-09T06:04:12.644Z",
    "history": [],
    "comparison": {
      "reference_count": 6,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 68,
        "summary": "The submitted BG contains several deviations from the standard template, some of which have approved precedents, while others are new and pose potential legal risks. The guarantee is conditionally approved with specific recommendations to address the non-compliant elements.",
        "key_findings": [
          {
            "category": "Beneficiary Details",
            "status": "MODIFIED",
            "standard_clause": "Owner (which expression shall unless repugnant to the context or meaning thereof be deemed to mean and include its successors and assigners) having accepted the tender of Fenesta building systems (A Unit of M/s. DCM Shriram Ltd) ...",
            "submitted_clause": "Tata Steel UISL [Formerly JUSCO], within the meaning of the term defined in the Companies Act 1956, having its Registered Office at Sakchi Boulevard, Northern Town, Bistupur, Jamshedpur - 831001",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "MEDIUM",
            "recommendation": "Ensure the beneficiary details are fully aligned with the standard template, including the inclusion of the Contractor's name and full address."
          },
          {
            "category": "Guarantee Amount",
            "status": "MODIFIED",
            "standard_clause": "Rs. 583,349.57 (FIVE LAKH EIGHTY THREE THOUSAND THREE HUNDRED AND FORTY TEN AND PAISE ONE RUPEES) ...",
            "submitted_clause": "Rs.3,34,867/- (in words Rupees Three Lakh Thirty-Four Thousand Eight Hundred Sixty Seven Only)",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "LOW",
            "recommendation": "Ensure the amount is clearly stated in both figures and words, and that it is consistent with the contract value."
          },
          {
            "category": "Validity Period",
            "status": "MODIFIED",
            "standard_clause": "The Guarantee shall come into force from the date contractor receives from owner the said advance amount. ... This Guarantee shall come into force from the date applicant receives from Beneficiary the said advance amount.",
            "submitted_clause": "This guarantee shall come into force from the date herein before mentioned and though this guarantee is initially given for a period of ………….. from ………….to…….. This guarantee shall remain in force till the CONTRACTOR duly complies with all its obligations under the said contract, and we agree and undertake to revalidate this guarantee for such extended period or periods as may be required by Tata Steel UISL.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "MEDIUM",
            "recommendation": "Clarify the validity period and ensure it is aligned with the standard template, including the revalidation clause."
          },
          {
            "category": "Invoking Clause",
            "status": "MODIFIED",
            "standard_clause": "We, the Guarantors absolutely, irrevocably and unconditionally agree that (a) the Owner shall be entitled to enforce this Guarantee without making any demand on or taking any proceedings against the Contractor.",
            "submitted_clause": "On account of the non-fulfillment of the contractual obligations by the CONTRACTOR under the said contract, we, the BANK, will, on a mere simple demand from Tata Steel UISL, pay to Tata Steel UISL the said amount ... without any protest or demur and without requiring Tata Steel UISL to invoke any legal remedy that may be available to it to compel the BANK to pay the same even if the CONTRACTOR considers such demand of Tata Steel UISL as unjustified.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "LOW",
            "recommendation": "Ensure the invocation clause is clear and unambiguous, and that it aligns with the standard template's unconditional payment upon demand."
          },
          {
            "category": "Governing Law",
            "status": "MODIFIED",
            "standard_clause": "This Bank Guarantee is governed by and construed in accordance with, the laws of India and New Delhi shall be exclusive jurisdiction.",
            "submitted_clause": "This guarantee shall be governed by the laws of India and the jurisdiction of the courts in Jamshedpur.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "The governing law and jurisdiction must be aligned with the standard template, which specifies the laws of India and New Delhi as exclusive jurisdiction."
          },
          {
            "category": "Dispute Resolution",
            "status": "MISSING",
            "standard_clause": "The decision of the Owner on all the matters concerning the terms and the requirements of the contract and the default/breach thereof by the contractor shall be final and binding on the Bank and the Bank shall not refer any such matter to the Contractor.",
            "submitted_clause": "Tata Steel UISL’s decision as to whether the CONTRACTOR has committed any default/s or breach of contract and the amount to which Tata Steel UISL is entitled by reason thereof will be binding on us and we shall not be entitled to ask Tata Steel UISL to establish its claims under this Guarantee.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "LOW",
            "recommendation": "Ensure the dispute resolution clause is clearly defined and that the beneficiary's decision is final and binding."
          },
          {
            "category": "Payment Terms",
            "status": "MODIFIED",
            "standard_clause": "We shall forthwith within five days of the Owner notifying in writing such default or breach to us (such notification to be conclusive as to default and breach), make payment to the Owner without any protest, objection or demur of the said sum ...",
            "submitted_clause": "On a mere simple demand from Tata Steel UISL, pay to Tata Steel UISL the said amount ... without any protest or demur and without requiring Tata Steel UISL to invoke any legal remedy that may be available to it to compel the BANK to pay the same even if the CONTRACTOR considers such demand of Tata Steel UISL as unjustified.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "LOW",
            "recommendation": "Ensure the payment terms are clearly defined and that the bank's obligation to pay is unconditional upon demand."
          },
          {
            "category": "Unconditional Clause",
            "status": "MODIFIED",
            "standard_clause": "We, the Guarantors absolutely, irrevocably and unconditionally agree that (a) the Owner shall be entitled to enforce this Guarantee without making any demand on or taking any proceedings against the Contractor.",
            "submitted_clause": "We, the BANK, will, on a mere simple demand from Tata Steel UISL, pay to Tata Steel UISL the said amount ... without any protest or demur and without requiring Tata Steel UISL to invoke any legal remedy that may be available to it to compel the BANK to pay the same even if the CONTRACTOR considers such demand of Tata Steel UISL as unjustified.",
            "approved_precedent": true,
            "precedent_source": "Rohan Builders -ABG",
            "impact": "LOW",
            "recommendation": "Ensure the unconditional clause is clearly stated and that the bank's obligation to pay is unambiguous."
          }
        ],
        "missing_clauses": [
          "Governing Law and Jurisdiction",
          "Dispute Resolution Clause"
        ],
        "critical_deviations": [
          "Governing Law and Jurisdiction"
        ],
        "acceptable_deviations": [
          "Validity Period",
          "Invoking Clause",
          "Dispute Resolution Clause",
          "Payment Terms",
          "Unconditional Clause"
        ],
        "new_deviations": [
          "Governing Law and Jurisdiction"
        ],
        "legal_risks": [
          "Governing Law and Jurisdiction not aligned with standard template",
          "Unclear validity period and revalidation clause",
          "Potential ambiguity in invocation clause"
        ],
        "action_items": [
          "Clarify the governing law and jurisdiction to align with the standard template (laws of India and New Delhi as exclusive jurisdiction).",
          "Ensure the validity period and revalidation clause are clearly defined and consistent with the standard template.",
          "Review the invocation clause to ensure it is unambiguous and aligns with the standard template's unconditional payment upon demand."
        ],
        "detailed_comparison": {
          "beneficiary_details": "Submitted BG modifies the beneficiary details to include 'Tata Steel UISL [Formerly JUSCO], within the meaning of the term defined in the Companies Act 1956, having its Registered Office at Sakchi Boulevard, Northern Town, Bistupur, Jamshedpur - 831001'. This is similar to the Rohan Builders -ABG format, which includes the beneficiary's name and address.",
          "guarantee_amount": "Submitted BG specifies the guarantee amount as Rs.3,34,867/- (in words Rupees Three Lakh Thirty-Four Thousand Eight Hundred Sixty Seven Only). This is consistent with the Rohan Builders -ABG format, which includes the amount in both figures and words.",
          "validity_period": "Submitted BG includes a validity period and revalidation clause, which is similar to the Rohan Builders -ABG format. However, the wording is less precise and could be improved for clarity.",
          "invocation_clause": "Submitted BG includes an invocation clause that allows the beneficiary to demand payment upon non-fulfillment of obligations. This is similar to the Rohan Builders -ABG format, which includes a similar clause.",
          "governing_law": "Submitted BG specifies the governing law as the laws of India and the jurisdiction of the courts in Jamshedpur. This deviates from the standard template, which specifies the laws of India and New Delhi as exclusive jurisdiction. This is a new deviation and poses a legal risk.",
          "dispute_resolution": "Submitted BG includes a dispute resolution clause that states the beneficiary's decision is binding on the bank. This is similar to the Rohan Builders -ABG format, which includes a similar clause.",
          "payment_terms": "Submitted BG includes payment terms that allow the beneficiary to demand payment upon non-fulfillment of obligations. This is similar to the Rohan Builders -ABG format, which includes a similar clause.",
          "unconditional_clause": "Submitted BG includes an unconditional clause that allows the beneficiary to demand payment upon non-fulfillment of obligations. This is similar to the Rohan Builders -ABG format, which includes a similar clause."
        }
      }
    }
  },
  {
    "id": "41fef120-a6f1-4d2a-bd28-23403807f91e",
    "bgReferenceId": "BG\\2026\\09007",
    "bgType": "ABG",
    "version": 1,
    "fileName": "STANDARD ABG.pdf",
    "status": "APPROVED",
    "overallScore": 100,
    "riskLevel": "LOW",
    "uploadedByName": "jay admin",
    "createdAt": "2026-09-08T10:35:38.565Z",
    "updatedAt": "2026-09-10T08:32:49.606Z",
    "history": [],
    "comparison": {
      "reference_count": 0,
      "validation": {
        "overall_status": "APPROVED",
        "risk_level": "LOW",
        "score": 100,
        "summary": "The uploaded document matches the configured standard template after text normalization.",
        "key_findings": [
          {
            "category": "Standard template match",
            "status": "COMPLIANT",
            "standard_clause": "Configured standard template",
            "submitted_clause": "Exact normalized text match",
            "approved_precedent": true,
            "precedent_source": "DCM Shriram Standard Template",
            "impact": "LOW",
            "recommendation": "No action required."
          }
        ],
        "missing_clauses": [],
        "critical_deviations": [],
        "acceptable_deviations": [],
        "new_deviations": [],
        "legal_risks": [],
        "action_items": [],
        "detailed_comparison": {}
      }
    }
  },
  {
    "id": "f4674531-dff5-4508-ad20-72fd5311cc1c",
    "bgReferenceId": "BG\\2026\\09006",
    "bgType": "RBG",
    "version": 1,
    "fileName": "DLF RBG copy.docx",
    "status": "REJECTED",
    "overallScore": 72,
    "riskLevel": "MEDIUM",
    "uploadedByName": "jay admin",
    "createdAt": "2026-09-08T10:01:17.985Z",
    "updatedAt": "2026-09-09T05:44:14.856Z",
    "history": [],
    "comparison": {
      "reference_count": 6,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 72,
        "summary": "The submitted BG is mostly compliant with the standard template and approved references, but contains several deviations that require careful review. The deviations include non-standard invocation clauses, lack of governing law, and a mismatch in validity period. These deviations have some precedent in approved references but require additional clarification to ensure compliance.",
        "key_findings": [
          {
            "category": "Beneficiary Details",
            "status": "MODIFIED",
            "standard_clause": "Beneficiary is M/s Amrita Vishwa Vidyapeetham, with registered office at Delhi NCR Campus, Mata Amritanandamayi Marg, Sector 88, Faridabad.",
            "submitted_clause": "Beneficiary is M/s DLF Homes Panchkula Pvt. Ltd., with registered office at 2nd Floor, DLF Gateway Tower, R Block, DLF City, Phase III, Gurgaon-122002, Haryana.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Confirm that the beneficiary details are accurate and match the contract terms."
          },
          {
            "category": "Guarantee Amount",
            "status": "MODIFIED",
            "standard_clause": "Guarantee amount is Rs. 1,238,963.00 (TWELVE LAKH THIRTY EIGHT THOUSAND NINE HUNDRED AND SIXTY THREE RUPEES).",
            "submitted_clause": "Guarantee amount is Rs. 62,24,504/- (Rupees Sixty Two Lakh Twenty Four Thousand Five Hundred Four Only).",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Ensure the guarantee amount aligns with the contract terms and retention percentage."
          },
          {
            "category": "Validity Period",
            "status": "MODIFIED",
            "standard_clause": "Guarantee is valid up to 2027-01-31 00:00:00.0.",
            "submitted_clause": "Guarantee is valid up to 31.10.2026.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Verify that the validity period is consistent with the contract and retention period."
          },
          {
            "category": "Invocation Clause",
            "status": "MODIFIED",
            "standard_clause": "Guarantor shall pay to Beneficiary on demand without demur and without notice or reference to Applicant.",
            "submitted_clause": "We are liable to pay the guaranteed amount or any part thereof under this Bank Guarantee only if you serve upon us a written claim or demand on or before 31.01.2027.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "MEDIUM",
            "recommendation": "Clarify the invocation process to ensure it aligns with the standard template and approved references."
          },
          {
            "category": "Governing Law",
            "status": "MISSING",
            "standard_clause": "The Law of Republic of India shall be governing law and the New Delhi court in the state of Delhi, shall have the exclusive jurisdiction.",
            "submitted_clause": "N/A",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include the governing law and jurisdiction clause as per the standard template."
          },
          {
            "category": "Dispute Resolution",
            "status": "MISSING",
            "standard_clause": "The Law of Republic of India shall be governing law and the New Delhi court in the state of Delhi, shall have the exclusive jurisdiction.",
            "submitted_clause": "N/A",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include the governing law and jurisdiction clause as per the standard template."
          },
          {
            "category": "Payment Terms",
            "status": "MODIFIED",
            "standard_clause": "Guarantor shall pay to Beneficiary on demand without demur and without notice or reference to Applicant.",
            "submitted_clause": "We are liable to pay the guaranteed amount or any part thereof under this Bank Guarantee only if you serve upon us a written claim or demand on or before 31.01.2027.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "MEDIUM",
            "recommendation": "Clarify the payment terms to ensure they align with the standard template and approved references."
          },
          {
            "category": "Unconditional Clause",
            "status": "MODIFIED",
            "standard_clause": "Guarantor shall pay to Beneficiary on demand without demur and without notice or reference to Applicant.",
            "submitted_clause": "We are liable to pay the guaranteed amount or any part thereof under this Bank Guarantee only if you serve upon us a written claim or demand on or before 31.01.2027.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "MEDIUM",
            "recommendation": "Clarify the unconditional nature of the guarantee to ensure it aligns with the standard template and approved references."
          }
        ],
        "missing_clauses": [
          "Governing Law",
          "Dispute Resolution"
        ],
        "critical_deviations": [
          "Governing Law",
          "Dispute Resolution"
        ],
        "acceptable_deviations": [
          "Validity Period",
          "Guarantee Amount",
          "Invocation Clause",
          "Payment Terms",
          "Unconditional Clause"
        ],
        "new_deviations": [],
        "legal_risks": [
          "Lack of governing law and jurisdiction clause",
          "Unclear invocation process",
          "Potential for disputes over payment terms"
        ],
        "action_items": [
          "Include the governing law and jurisdiction clause as per the standard template.",
          "Clarify the invocation process to ensure it aligns with the standard template and approved references.",
          "Verify that the validity period and guarantee amount are consistent with the contract terms.",
          "Ensure the submitted BG is reviewed by legal counsel to confirm compliance with all required clauses."
        ],
        "detailed_comparison": {
          "beneficiary_details": "Submitted BG has modified beneficiary details, which is acceptable as per approved references.",
          "guarantee_amount": "Submitted BG has modified guarantee amount, which is acceptable as per approved references.",
          "validity_period": "Submitted BG has modified validity period, which is acceptable as per approved references.",
          "invocation_clause": "Submitted BG has modified invocation clause, which is acceptable as per approved references.",
          "governing_law": "Submitted BG is missing governing law clause, which is a critical deviation.",
          "dispute_resolution": "Submitted BG is missing dispute resolution clause, which is a critical deviation.",
          "payment_terms": "Submitted BG has modified payment terms, which is acceptable as per approved references.",
          "unconditional_clause": "Submitted BG has modified unconditional clause, which is acceptable as per approved references."
        }
      }
    }
  },
  {
    "id": "9b1a252c-6585-46e5-ad00-995428e1abf2",
    "bgReferenceId": "BG\\2026\\09005",
    "bgType": "RBG",
    "version": 1,
    "fileName": "DLF RBG.docx",
    "status": "REJECTED",
    "overallScore": 68,
    "riskLevel": "MEDIUM",
    "uploadedByName": "jay admin",
    "createdAt": "2026-09-08T09:45:02.510Z",
    "updatedAt": "2026-09-10T08:33:20.390Z",
    "history": [],
    "comparison": {
      "reference_count": 6,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 68,
        "summary": "The submitted BG is mostly compliant with the standard template and approved references, but contains several deviations that require careful review. The deviations include minor structural and wording differences, as well as some new elements not seen in approved references. These deviations are not inherently risky but may require clarification or adjustment to align fully with DCM Shriram Ltd's standard practices.",
        "key_findings": [
          {
            "category": "Beneficiary Details",
            "status": "MODIFIED",
            "standard_clause": "Beneficiary is M/s Amrita Vishwa Vidyapeetham, with registered office at Delhi NCR Campus, Mata Amritanandamayi Marg, Sector 88, Faridabad.",
            "submitted_clause": "Beneficiary is M/s DLF Homes Panchkula Pvt. Ltd., with registered office at 2nd Floor, DLF Gateway Tower, R Block, DLF City, Phase III, Gurgaon-122002, Haryana.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Confirm that the beneficiary is correctly identified and that the change is consistent with the contract."
          },
          {
            "category": "Guarantee Amount",
            "status": "MODIFIED",
            "standard_clause": "Guarantee amount is Rs. 1,238,963.00 (TWELVE LAKH THIRTY EIGHT THOUSAND NINE HUNDRED AND SIXTY THREE RUPEES).",
            "submitted_clause": "Guarantee amount is Rs. 62,24,504/- (Rupees Sixty Two Lakh Twenty Four Thousand Five Hundred Four Only).",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Verify that the guarantee amount aligns with the retention amount specified in the contract."
          },
          {
            "category": "Validity Period",
            "status": "MODIFIED",
            "standard_clause": "Guarantee is valid up to 2027-01-31 00:00:00.0.",
            "submitted_clause": "Guarantee is valid up to 31.10.2026.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Ensure the validity period is consistent with the contract and any applicable retention period."
          },
          {
            "category": "Invoking Clause",
            "status": "MODIFIED",
            "standard_clause": "Guarantor shall pay upon demand without demur and without notice or reference to Applicant.",
            "submitted_clause": "Bank shall pay upon demand without any protest, contest or demur, and without any recourse to the Contractor.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Ensure the invoking clause is clear and consistent with the standard template."
          },
          {
            "category": "Governing Law",
            "status": "MODIFIED",
            "standard_clause": "Law of Republic of India shall be governing law and New Delhi court in the state of Delhi shall have exclusive jurisdiction.",
            "submitted_clause": "Not specified in the submitted BG.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Include the governing law and jurisdiction clause to ensure compliance with standard template."
          },
          {
            "category": "Dispute Resolution",
            "status": "MODIFIED",
            "standard_clause": "Law of Republic of India shall be governing law and New Delhi court in the state of Delhi shall have exclusive jurisdiction.",
            "submitted_clause": "Not specified in the submitted BG.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Include the governing law and jurisdiction clause to ensure compliance with standard template."
          },
          {
            "category": "Payment Terms",
            "status": "MODIFIED",
            "standard_clause": "Guarantor shall pay upon demand without demur and without notice or reference to Applicant.",
            "submitted_clause": "Bank shall pay upon demand without any protest, contest or demur, and without any recourse to the Contractor.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Ensure the payment terms are clear and consistent with the standard template."
          },
          {
            "category": "Unconditional Clause",
            "status": "MODIFIED",
            "standard_clause": "Guarantor shall pay upon demand without demur and without notice or reference to Applicant.",
            "submitted_clause": "Bank shall pay upon demand without any protest, contest or demur, and without any recourse to the Contractor.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Ensure the unconditional clause is clear and consistent with the standard template."
          },
          {
            "category": "Claim Period",
            "status": "MODIFIED",
            "standard_clause": "Guarantee is valid up to 2027-01-31 00:00:00.0.",
            "submitted_clause": "We are liable to pay the guaranteed amount or any part thereof under this Bank Guarantee only if you serve upon us a written claim or demand on or before 31.01.2027.",
            "approved_precedent": true,
            "precedent_source": "Suroj Buildon Retention Bank Guarantee",
            "impact": "LOW",
            "recommendation": "Ensure the claim period is consistent with the validity period and contract terms."
          },
          {
            "category": "Bank Details",
            "status": "MISSING",
            "standard_clause": "Bank details are included in the standard template.",
            "submitted_clause": "Bank details are not included in the submitted BG.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include bank details to ensure clarity and enforceability."
          },
          {
            "category": "Signatory Details",
            "status": "MISSING",
            "standard_clause": "Bank Seal / Stamp and Authorized Signatory details are included.",
            "submitted_clause": "Signatory details are not fully included in the submitted BG.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include bank seal, stamp, and authorized signatory details to ensure enforceability."
          },
          {
            "category": "Witnesses",
            "status": "MISSING",
            "standard_clause": "Witnesses are included in the standard template.",
            "submitted_clause": "Witnesses are not included in the submitted BG.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include witnesses to ensure the enforceability and authenticity of the document."
          }
        ],
        "missing_clauses": [
          "Governing Law",
          "Dispute Resolution",
          "Bank Details",
          "Signatory Details",
          "Witnesses"
        ],
        "critical_deviations": [
          "Governing Law",
          "Dispute Resolution",
          "Bank Details",
          "Signatory Details",
          "Witnesses"
        ],
        "acceptable_deviations": [
          "Beneficiary Details",
          "Guarantee Amount",
          "Validity Period",
          "Invoking Clause",
          "Payment Terms",
          "Unconditional Clause",
          "Claim Period"
        ],
        "new_deviations": [],
        "legal_risks": [
          "Missing governing law and dispute resolution clauses",
          "Missing bank details",
          "Missing signatory details",
          "Missing witnesses"
        ],
        "action_items": [
          "Include governing law and dispute resolution clauses to align with the standard template.",
          "Add bank details to the submitted BG.",
          "Include signatory details and bank seal/stamp.",
          "Add witnesses to the submitted BG.",
          "Verify that the submitted BG aligns with the contract and retention amount."
        ],
        "detailed_comparison": {
          "beneficiary_details": "Submitted BG has a different beneficiary (DLF Homes Panchkula Pvt. Ltd.) compared to the standard template (Amrita Vishwa Vidyapeetham). This deviation is acceptable based on precedent in Suroj Buildon Retention Bank Guarantee.",
          "guarantee_amount": "Submitted BG has a different guarantee amount (Rs. 62,24,504/-) compared to the standard template (Rs. 1,238,963.00). This deviation is acceptable based on precedent in Suroj Buildon Retention Bank Guarantee.",
          "validity_period": "Submitted BG has a different validity period (31.10.2026) compared to the standard template (2027-01-31 00:00:00.0). This deviation is acceptable based on precedent in Suroj Buildon Retention Bank Guarantee.",
          "invocation_clause": "Submitted BG has a modified invocation clause (Bank shall pay upon demand without any protest, contest or demur, and without any recourse to the Contractor) compared to the standard template (Guarantor shall pay upon demand without demur and without notice or reference to Applicant). This deviation is acceptable based on precedent in Suroj Buildon Retention Bank Guarantee.",
          "governing_law": "Submitted BG does not specify governing law, while the standard template specifies the Law of Republic of India and New Delhi court. This deviation is not seen in any approved references.",
          "dispute_resolution": "Submitted BG does not specify dispute resolution, while the standard template specifies the Law of Republic of India and New Delhi court. This deviation is not seen in any approved references.",
          "payment_terms": "Submitted BG has a modified payment terms clause (Bank shall pay upon demand without any protest, contest or demur, and without any recourse to the Contractor) compared to the standard template (Guarantor shall pay upon demand without demur and without notice or reference to Applicant). This deviation is acceptable based on precedent in Suroj Buildon Retention Bank Guarantee.",
          "unconditional_clause": "Submitted BG has a modified unconditional clause (Bank shall pay upon demand without any protest, contest or demur, and without any recourse to the Contractor) compared to the standard template (Guarantor shall pay upon demand without demur and without notice or reference to Applicant). This deviation is acceptable based on precedent in Suroj Buildon Retention Bank Guarantee."
        }
      }
    }
  },
  {
    "id": "346fdc51-0e6b-428c-9982-caa416b2fcbc",
    "bgReferenceId": "BG\\2026\\09004",
    "bgType": "PBG",
    "version": 1,
    "fileName": "DLF PBG.docx",
    "status": "REJECTED",
    "overallScore": 72,
    "riskLevel": "MEDIUM",
    "uploadedByName": "jay admin",
    "createdAt": "2026-09-08T09:04:26.403Z",
    "updatedAt": "2026-09-10T07:29:42.637Z",
    "history": [],
    "comparison": {
      "reference_count": 7,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "MEDIUM",
        "score": 72,
        "summary": "The submitted BG is mostly compliant with the standard template and approved references, but contains several deviations that require careful review. The most significant deviation is the lack of a clear Force Majeure clause, which is present in the standard template and some approved references. Other deviations include the absence of a specific clause regarding the Contractor's obligations and the inclusion of a claim period that extends beyond the validity period of the guarantee. These deviations are not present in any approved references and may pose legal risks.",
        "key_findings": [
          {
            "category": "Force Majeure Clause",
            "status": "MISSING",
            "standard_clause": "The Force Majeure clause is explicitly defined in the standard template and includes events such as war, hostilities, acts of God, etc.",
            "submitted_clause": "The submitted BG does not include a Force Majeure clause.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include a Force Majeure clause as per the standard template or an approved reference."
          },
          {
            "category": "Claim Period",
            "status": "MODIFIED",
            "standard_clause": "The standard template specifies that the claim must be made on or before the validity period of the guarantee (31-01-2027).",
            "submitted_clause": "The submitted BG states that the claim must be made on or before 31-01-2027, which is the same as the standard template, but the validity period is 31-10-2026.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #1: Devas PBG",
            "impact": "MEDIUM",
            "recommendation": "Ensure that the claim period does not extend beyond the validity period of the guarantee."
          },
          {
            "category": "Unconditional Payment Clause",
            "status": "MODIFIED",
            "standard_clause": "The standard template requires the bank to pay without requiring the Owner to prove or show grounds for the demand.",
            "submitted_clause": "The submitted BG states that the Bank shall pay without protest, contest, or demur, and without requiring any evidence from the Owner.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #1: Devas PBG",
            "impact": "LOW",
            "recommendation": "The clause is compliant with approved references."
          },
          {
            "category": "Governing Law",
            "status": "MODIFIED",
            "standard_clause": "The standard template specifies that the guarantee is governed by the laws of India and subject to the exclusive jurisdiction of the courts of New Delhi.",
            "submitted_clause": "The submitted BG does not specify the governing law or jurisdiction.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "HIGH",
            "recommendation": "Include a governing law and jurisdiction clause as per the standard template."
          },
          {
            "category": "Contractor Obligations",
            "status": "MISSING",
            "standard_clause": "The standard template includes a clause that the guarantee remains in force regardless of any changes to the contract or works.",
            "submitted_clause": "The submitted BG does not include a clause regarding the Contractor's obligations or the enforceability of the guarantee despite changes to the contract.",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "MEDIUM",
            "recommendation": "Include a clause that the guarantee remains in force regardless of any changes to the contract or works."
          },
          {
            "category": "Bank's Liability",
            "status": "MODIFIED",
            "standard_clause": "The standard template specifies that the bank's liability is limited to the guaranteed amount and that the claim must be made within the validity period.",
            "submitted_clause": "The submitted BG specifies that the bank's liability is limited to the guaranteed amount and that the claim must be made on or before 31-01-2027.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #1: Devas PBG",
            "impact": "LOW",
            "recommendation": "The clause is compliant with approved references."
          }
        ],
        "missing_clauses": [
          "Force Majeure Clause",
          "Governing Law and Jurisdiction Clause",
          "Contractor Obligations Clause"
        ],
        "critical_deviations": [
          "Force Majeure Clause",
          "Governing Law and Jurisdiction Clause"
        ],
        "acceptable_deviations": [
          "Claim Period",
          "Unconditional Payment Clause",
          "Bank's Liability"
        ],
        "new_deviations": [
          "Contractor Obligations Clause"
        ],
        "legal_risks": [
          "Lack of Force Majeure clause may expose the bank to liability for events beyond its control.",
          "Absence of governing law and jurisdiction clause may lead to disputes over jurisdiction.",
          "Lack of Contractor obligations clause may create ambiguity in the enforceability of the guarantee."
        ],
        "action_items": [
          "Include a Force Majeure clause as per the standard template or an approved reference.",
          "Specify the governing law and jurisdiction as per the standard template.",
          "Include a clause regarding the Contractor's obligations and the enforceability of the guarantee despite changes to the contract.",
          "Ensure that the claim period does not extend beyond the validity period of the guarantee."
        ],
        "detailed_comparison": {
          "beneficiary_details": "The submitted BG specifies the beneficiary as M/s. DLF Homes Panchkula Pvt. Ltd., which is different from the standard template's beneficiary (M/s. Amrita Vishwa Vidyapeetham). This deviation is not present in any approved reference.",
          "guarantee_amount": "The submitted BG specifies a guarantee amount of Rs.62,24,504/-, which is 5% of the contract value, as per the standard template. This is compliant with approved references.",
          "validity_period": "The submitted BG specifies a validity period of 31-10-2026, which is different from the standard template's validity period of 31-01-2027. This deviation is not present in any approved reference.",
          "invocation_clause": "The submitted BG includes an invocation clause that is similar to the standard template, but it lacks the Force Majeure clause. This deviation is not present in any approved reference.",
          "governing_law": "The submitted BG does not specify the governing law or jurisdiction, which is a deviation from the standard template. This deviation is not present in any approved reference.",
          "dispute_resolution": "The submitted BG does not include a dispute resolution clause, which is a deviation from the standard template. This deviation is not present in any approved reference.",
          "payment_terms": "The submitted BG includes payment terms that are similar to the standard template, but it lacks the Force Majeure clause. This deviation is not present in any approved reference.",
          "unconditional_clause": "The submitted BG includes an unconditional payment clause that is compliant with approved references."
        }
      }
    }
  },
  {
    "id": "5ca7af99-4b39-4d3f-8d08-8ae4d06268b0",
    "bgReferenceId": "BG\\2026\\09003",
    "bgType": "ABG",
    "version": 1,
    "fileName": "STANDARD ABG.pdf",
    "status": "REJECTED",
    "overallScore": 60,
    "riskLevel": "HIGH",
    "uploadedByName": "jay admin",
    "createdAt": "2026-09-08T07:41:03.792Z",
    "updatedAt": "2026-09-09T06:04:24.123Z",
    "history": [],
    "comparison": {
      "reference_count": 6,
      "validation": {
        "overall_status": "CONDITIONAL_APPROVAL",
        "risk_level": "HIGH",
        "score": 60,
        "summary": "The submitted BG matches the standard template in most aspects but contains critical deviations including an incomplete final clause. The truncation of the document poses a significant risk. Minor deviations have approved precedents, but the incomplete text requires immediate correction.",
        "key_findings": [
          {
            "category": "Document Completeness",
            "status": "MISSING",
            "standard_clause": "The guarantee must be fully completed with all clauses and signatures.",
            "submitted_clause": "The submitted BG ends abruptly with 'Notwithstanding anything contained herein ab' (truncated).",
            "approved_precedent": false,
            "precedent_source": null,
            "impact": "CRITICAL",
            "recommendation": "Complete the document with all clauses and ensure proper signing."
          },
          {
            "category": "Guarantee Validity Period",
            "status": "COMPLIANT",
            "standard_clause": "Guarantee valid until 31-01-2027.",
            "submitted_clause": "Guarantee valid until 31-01-2027.",
            "approved_precedent": true,
            "precedent_source": "STANDARD TEMPLATE",
            "impact": "LOW",
            "recommendation": "No action required."
          },
          {
            "category": "Invoking Clause",
            "status": "MODIFIED",
            "standard_clause": "Owner must notify Bank in writing within 5 days of default.",
            "submitted_clause": "Owner must notify Bank in writing within 5 days of default.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #3",
            "impact": "LOW",
            "recommendation": "No action required."
          },
          {
            "category": "Liability Reduction Clause",
            "status": "COMPLIANT",
            "standard_clause": "Liability reduces with repayment amounts.",
            "submitted_clause": "Liability reduces with repayment amounts.",
            "approved_precedent": true,
            "precedent_source": "APPROVED REFERENCE #4",
            "impact": "LOW",
            "recommendation": "No action required."
          }
        ],
        "missing_clauses": [
          "Final clause completion",
          "Bank's address for claims"
        ],
        "critical_deviations": [
          "Document truncation"
        ],
        "acceptable_deviations": [
          "Guarantee validity period",
          "Invoking clause"
        ],
        "new_deviations": [
          "Document truncation"
        ],
        "legal_risks": [
          "Incomplete document invalidates enforceability",
          "Unclear liability limits"
        ],
        "action_items": [
          "Complete the BG document with all clauses",
          "Verify liability limits against approved references"
        ],
        "detailed_comparison": {
          "beneficiary_details": "Compliant with standard template and approved references.",
          "guarantee_amount": "Compliant with standard template and approved references.",
          "validity_period": "Compliant with standard template and approved references.",
          "invocation_clause": "Compliant with standard template and approved references.",
          "governing_law": "Compliant with standard template and approved references.",
          "dispute_resolution": "Compliant with standard template and approved references.",
          "payment_terms": "Compliant with standard template and approved references.",
          "unconditional_clause": "Compliant with standard template and approved references."
        }
      }
    }
  }
];
