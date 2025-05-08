import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-muted/50">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Work Experience
                </h2>

                <div className="relative border-l border-purple-900 dark:border-purple-950 pl-8 ml-4 space-y-12">
                    {/* Job 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute w-4 h-4 bg-purple-900 dark:bg-purple-950 rounded-full -left-[2.35rem] top-1.5 border-4 border-background dark:border-background"></div>
                        <div className="mb-2">
                            <h3 className="text-xl font-bold">
                                Desktop Technician
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                <Briefcase className="h-4 w-4" />
                                <span className="font-medium">
                                    Langara College
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                <Calendar className="h-4 w-4" />
                                <span>September 2024 - May 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                <MapPin className="h-4 w-4" />
                                <span>Vancouver, BC</span>
                            </div>
                        </div>
                        <Card>
                            <CardContent className="pt-6">
                                <p className="mb-4">
                                    Providing frontline technical support to
                                    faculty and staff by troubleshooting
                                    hardware, software, and network issues.
                                    Responsible for imaging and deploying
                                    devices, managing user accounts through
                                    Active Directory and Azure, and maintaining
                                    classroom and lab equipment. Collaborating
                                    with IT team members to implement efficient
                                    support processes and ensure minimal
                                    downtime for end users.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li>
                                        Utilized SQL queries to verify and track
                                        a large inventory of monitors within
                                        Microsoft Inventory, ensuring accurate
                                        data and improved asset management.
                                    </li>
                                    <li>
                                        Architected and implemented
                                        authentication API with JWT and OAuth
                                        integration
                                    </li>
                                    <li>
                                        Deployed Adobe software to target
                                        devices using System Center
                                        Configuration Manager (SCCM), ensuring
                                        seamless user experience and zero
                                        post-deployment issues.
                                    </li>
                                    <li>
                                        Led team efforts during the Great
                                        Monitor Migration by developing a
                                        streamlined pipeline that improved list
                                        accuracy and reduced redundant updates.
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        SQL
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        SCCM
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Active Directory
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Microsoft Azure
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Microsoft Inventory System
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Problem-Solving
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Troubleshooting
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Job 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute w-4 h-4 bg-purple-900 dark:bg-purple-950 rounded-full -left-[2.35rem] top-1.5 border-4 border-background dark:border-background"></div>
                        <div className="mb-2">
                            <h3 className="text-xl font-bold">
                                Software Developer
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                <Briefcase className="h-4 w-4" />
                                <span className="font-medium">
                                    Web Dev Path
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                <Calendar className="h-4 w-4" />
                                <span>June 2023 - Present</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                <MapPin className="h-4 w-4" />
                                <span>Vancouver, BC</span>
                            </div>
                        </div>
                        <Card>
                            <CardContent className="pt-6">
                                <p className="mb-4">
                                    Contributed to the project for over a year
                                    to develop a platform that showcases Web Dev
                                    Path's services and helps attract
                                    initiatives and organizations in need of
                                    support.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li>
                                        Migrated existing codebase from
                                        JavaScript to TypeScript to enhance code
                                        safety and maintainability.
                                    </li>
                                    <li>
                                        Demonstrated technical skills by
                                        actively providing support and
                                        participating in code reviews, ensuring
                                        the ideal implementation of new
                                        features.
                                    </li>
                                    <li>
                                        Implemented modularization of CSS code
                                        using Styled Components to improve code
                                        reusability and maintainability.
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        JavaScript
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        TypeScript
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        React
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Next.js
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Git
                                    </span>
                                    <span className="px-2 py-1 bg-purple-900 text-white dark:bg-purple-950 dark:text-purple-300 text-xs rounded-full font-medium">
                                        Agile
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
