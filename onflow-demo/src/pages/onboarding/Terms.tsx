import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef } from "react";

const Terms = () => {
  const [accepted, setAccepted] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [canAccept, setCanAccept] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hasScrolledToBottom && timeSpent >= 10) {
      setCanAccept(true);
    }
  }, [hasScrolledToBottom, timeSpent]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const bottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
    if (bottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  };

  return (
    <OnboardingLayout currentStep={4}>
      <div className="w-full max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Please review and accept our terms to continue
        </p>
        
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <ScrollArea className="h-[400px] pr-4" onScrollCapture={handleScroll}>
            <div className="space-y-6 text-sm" ref={scrollAreaRef}>
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using this workspace platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                <p className="text-muted-foreground mb-2">
                  Permission is granted to temporarily access and use the materials on this platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Data Privacy</h2>
                <p className="text-muted-foreground">
                  We are committed to protecting your privacy. All personal information collected will be stored securely and used only for the purposes outlined in our Privacy Policy. We do not sell or share your personal data with third parties without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Account Security</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account credentials. You agree to accept responsibility for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. User Content</h2>
                <p className="text-muted-foreground">
                  You retain all rights to the content you create and store in your workspace. By using our service, you grant us permission to store, backup, and display your content solely for the purpose of providing the service to you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Service Availability</h2>
                <p className="text-muted-foreground">
                  While we strive to maintain 99.9% uptime, we do not guarantee that the service will be available at all times. We reserve the right to modify, suspend, or discontinue the service with or without notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Intellectual Property Rights</h2>
                <p className="text-muted-foreground mb-2">
                  All content, features, and functionality on this platform, including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof, are owned by the Company, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                <p className="text-muted-foreground">
                  You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our platform, except as generally and ordinarily permitted through the platform according to these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">12. User Representations and Warranties</h2>
                <p className="text-muted-foreground mb-2">
                  By using the Service, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>All registration information you submit will be true, accurate, current, and complete</li>
                  <li>You will maintain the accuracy of such information and promptly update it as necessary</li>
                  <li>You have the legal capacity and agree to comply with these Terms</li>
                  <li>You are not a minor in the jurisdiction in which you reside</li>
                  <li>You will not access the Service through automated or non-human means</li>
                  <li>You will not use the Service for any illegal or unauthorized purpose</li>
                  <li>Your use of the Service will not violate any applicable law or regulation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">13. Prohibited Activities</h2>
                <p className="text-muted-foreground mb-2">
                  You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Service, you agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Systematically retrieve data or content to create a collection, database, or directory</li>
                  <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
                  <li>Use the Service in a manner inconsistent with any applicable laws or regulations</li>
                  <li>Engage in unauthorized framing of or linking to the Service</li>
                  <li>Upload or transmit viruses, Trojan horses, or other malicious material</li>
                  <li>Engage in automated use of the system or launch any automated system</li>
                  <li>Attempt to impersonate another user or person or use the username of another user</li>
                  <li>Sell or otherwise transfer your profile or account</li>
                  <li>Use any information obtained from the Service to harass, abuse, or harm another person</li>
                  <li>Decipher, decompile, disassemble, or reverse engineer any software comprising the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">14. User Generated Contributions</h2>
                <p className="text-muted-foreground mb-2">
                  The Service may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Service.
                </p>
                <p className="text-muted-foreground">
                  Any such contributions must comply with the following standards: they must not be illegal, fraudulent, or for any illegal or unauthorized purpose; must not infringe any proprietary right of any party; must not be capable of giving rise to legal action whether against you or us or a third party.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">15. Contribution License</h2>
                <p className="text-muted-foreground">
                  By posting your contributions to any part of the Service, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such contributions in any manner.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">16. Third-Party Websites and Content</h2>
                <p className="text-muted-foreground">
                  The Service may contain links to third-party websites or services that are not owned or controlled by the Company. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that the Company shall not be responsible or liable for any damage or loss caused by or in connection with use of any such content, goods, or services available on or through any such third-party websites or services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">17. Advertising and Promotions</h2>
                <p className="text-muted-foreground">
                  We may display advertisements and promotions on the Service. Your business dealings or correspondence with, or participation in promotions of, advertisers other than us, and any terms, conditions, warranties, or representations associated with such dealings, are solely between you and such advertiser. We are not responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">18. Service Management</h2>
                <p className="text-muted-foreground mb-2">
                  We reserve the right, but not the obligation, to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Monitor the Service for violations of these Terms</li>
                  <li>Take appropriate legal action against anyone who violates the law or these Terms</li>
                  <li>Refuse, restrict access to, limit availability of, or disable any contribution or portion thereof</li>
                  <li>Remove from the Service or otherwise disable all files and content that are excessive in size</li>
                  <li>Otherwise manage the Service in a manner designed to protect our rights and property</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">19. Privacy and Data Protection</h2>
                <p className="text-muted-foreground mb-2">
                  We care about data privacy and security. By using the Service, you agree to be bound by our Privacy Policy, which is incorporated into these Terms. Please be advised the Service is hosted in various jurisdictions. If you access the Service from any region with laws governing data collection and use that may differ from applicable laws, please note that you are transferring your personal information to these jurisdictions, and by providing your personal information you consent to that transfer.
                </p>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">20. Copyright Infringement</h2>
                <p className="text-muted-foreground">
                  We respect the intellectual property rights of others. If you believe that any material available on or through the Service infringes upon any copyright you own or control, please immediately notify us using the contact information provided below. A copy of your notice will be sent to the person who posted or stored the material addressed in the notice. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a notification.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">21. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-2">
                  THE SERVICE IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. YOU AGREE THAT YOUR USE OF THE SERVICE WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-muted-foreground">
                  WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SERVICE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">22. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: your contributions; use of the Service; breach of these Terms; any breach of your representations and warranties; your violation of the rights of a third party, including but not limited to intellectual property rights; or any overt harmful act toward any other user of the Service with whom you connected via the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">23. Dispute Resolution and Arbitration</h2>
                <p className="text-muted-foreground mb-2">
                  Any legal dispute arising from or relating to these Terms or the Service shall be resolved through binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify. The arbitration will be conducted by a single arbitrator in accordance with the rules of a recognized arbitration association.
                </p>
                <p className="text-muted-foreground">
                  You and we agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If for any reason a claim proceeds in court rather than in arbitration, we each waive any right to a jury trial.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">24. Geographic Restrictions</h2>
                <p className="text-muted-foreground">
                  The owner of the Service is based in a specific jurisdiction and we provide this Service for use only by persons located in that jurisdiction and other authorized jurisdictions. We make no claims that the Service or any of its content is accessible or appropriate outside of authorized jurisdictions. Access to the Service may not be legal by certain persons or in certain countries. If you access the Service from outside authorized jurisdictions, you do so on your own initiative and are responsible for compliance with local laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">25. Miscellaneous Provisions</h2>
                <p className="text-muted-foreground mb-2">
                  These Terms and any policies or operating rules posted by us on the Service constitute the entire agreement between you and us. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision.
                </p>
                <p className="text-muted-foreground">
                  If any provision or part of a provision of these Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Terms or use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">26. Contact Information</h2>
                <p className="text-muted-foreground mb-2">
                  In order to resolve a complaint regarding the Service or to receive further information regarding use of the Service, please contact us at:
                </p>
                <div className="ml-4 text-muted-foreground">
                  <p>Email: legal@workspace.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Business St, Suite 100, City, State 12345</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">27. Acknowledgment</h2>
                <p className="text-muted-foreground">
                  BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THE SERVICE.
                </p>
              </section>
            </div>
          </ScrollArea>
        </div>

        {!canAccept && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              {!hasScrolledToBottom && "Please scroll to the bottom of the terms to continue"}
              {hasScrolledToBottom && timeSpent < 10 && `Please read the terms carefully (${10 - timeSpent}s remaining)`}
            </p>
          </div>
        )}

        <div className="bg-accent/50 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Checkbox 
              id="accept-terms" 
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked === true)}
              className="mt-1"
              disabled={!canAccept}
            />
            <label 
              htmlFor="accept-terms" 
              className={`text-sm font-medium leading-relaxed ${canAccept ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
            >
              I have read and agree to the Terms and Conditions, Privacy Policy, and all other applicable policies. I understand that my use of this service is subject to these terms.
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/onboarding/payment">
            <Button 
              size="lg"
              disabled={!accepted}
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Terms;
