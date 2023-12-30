const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-4 tw-h-full">
      <div className="tw-flex tw-justify-center tw-items-center tw-mb-4 tw-w-10 tw-h-10 tw-rounded-full lg:tw-h-12 lg:tw-w-12 tw-bg-cyan-900">
        {icon}
      </div>
      <h3 className="tw-text-xl tw-font-bold dark:tw-text-white">{title}</h3>
      <p className="tw-text-gray-500 tw-text-justify dark:tw-text-gray-400 tw-line-clamp-4">
        {description}
      </p>
      <p className="tw-flex tw-items-end tw-flex-grow tw-font-bold tw-text-cyan-600 dark:tw-text-cyan-300 tw-italic">
        {price}
      </p>
    </div>
  );
};

export default ServiceCard;
