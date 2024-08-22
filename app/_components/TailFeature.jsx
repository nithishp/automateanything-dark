import { ArrowPathIcon, ArrowsPointingOutIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Bot, HelpingHand, PencilRuler } from 'lucide-react';

const features = [
  {
    name: "Expertise in Automation",
    description:
      "We bring deep technical knowledge and experience in RPA and software development.",
    icon: Bot,
  },
  {
    name: "Tailored Solutions",
    description:
      "Our solutions are customized to meet the unique needs of your business.",
    icon: PencilRuler,
  },
  {
    name: "Comprehensive Support",
    description:
      "We provide end-to-end support, from initial consultation to implementation and ongoing maintenance, ensuring a smooth transformation journey.",
    icon: HelpingHand,
  },
  {
    name: "Scalable Services",
    description:
      "Whether you're a small business or a large enterprise, our solutions are designed to grow with your business needs.",
    icon: ArrowsPointingOutIcon,
  },
];

export default function TailFeature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Why Choose 2AA?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What sets us apart?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At 2 Automate Anything (2AA), we understand that selecting the right
            partner for your digital transformation journey is crucial. Here’s
            why we stand out as the preferred choice for businesses aiming to
            innovate, automate, and thrive in today's competitive landscape.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
