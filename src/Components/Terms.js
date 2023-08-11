import React from "react";

function Terms(){
    return(
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              TERMS & CONDITIONS
            </button>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-4  trms_txt" id="exampleModalLabel">Terms and Conditions</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body trms_txt">
                        <div>
                            <h5>1. Acceptance of Terms</h5>
                            <p>By accessing or using the HIRE-HUB platform ("Platform"), you agree to comply with and be bound by these Terms and Conditions ("T&C"). If you do not agree with any part of these T&C, please refrain from using the Platform.</p>
                        </div>
                        <div>
                          <h5>2. User Accounts</h5>
                          <p>You are responsible for maintaining the confidentiality of your account information.</p>
                          <p>HIRE-HUB reserves the right to terminate or suspend accounts for violation of these T&C.</p>
                        </div>
                        <div>
                          <h5>3. User Conduct</h5>
                          <p>Users shall not engage in unlawful, abusive, harassing, or harmful activities on the Platform.</p>
                          <p>Users shall respect intellectual property rights and refrain from unauthorized use of content.</p>
                        </div>
                        <div>
                          <h5>4. Privacy and Data Usage</h5>
                          <p>Your use of the Platform is subject to our Privacy Policy, which explains how we collect, use, and protect your data.</p>
                        </div>
                        <div>
                          <h5>5. Intellectual Property</h5>
                          <p>All content on the Platform is owned by or licensed to HIRE-HUB and is protected by intellectual property laws.</p>
                          <p>Users may not use, copy, or distribute Platform content without explicit permission.</p>
                        </div>
                        <div>
                          <h5>6. Liability and Disclaimers</h5>
                          <p>HIRE-HUB does not guarantee the accuracy, reliability, or completeness of content on the Platform.</p>
                          <p>Users acknowledge that their use of the Platform is at their own risk.</p>
                        </div>
                        <div>
                          <h5>7. Third-Party Links and Content</h5>
                          <p>The Platform may contain links to third-party websites; HIRE-HUB is not responsible for the content or accuracy of these links.</p>
                        </div>
                        <div>
                          <h5>8. Termination and Suspension</h5>
                          <p>HIRE-HUB reserves the right to terminate or suspend user accounts at its discretion.</p>
                          <p>Upon termination or suspension, users shall cease using the Platform.</p>
                        </div>
                        <div>
                          <h5>9. Governing Law and Jurisdiction</h5>
                          <p>These T&C are governed by the laws of [Your Jurisdiction].</p>
                          <p>Any legal disputes arising from these T&C shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].</p>
                        </div>
                        <div>
                          <h5>10. Changes to T&C</h5>
                          <p>HIRE-HUB may update or modify these T&C at any time.</p>
                          <p>Users will be notified of changes, and continued use of the Platform after changes constitutes acceptance of the revised T&C.</p>
                        </div>
                        <div>
                          <h5>11. Contact Information</h5>
                          <p>For questions or concerns regarding these T&C, please contact us at [Your Contact Information].</p>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ACCEPT</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms;