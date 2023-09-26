import React from "react";

import { useRouter } from "next/router";
import ServiceDetailsPage from "@/components/reusable/ServiceDetailsPage";

type Props = {};

const ServiceDetailId = (props: Props) => {
  const router = useRouter();
  const { serviceId, serviceDetailsId } = router.query;

  console.log("ServiceId", serviceId);

  return (
    <>
      <ServiceDetailsPage
        serviceId={serviceId}
        serviceDetailsId={serviceDetailsId}
      />
    </>
  );
};

export default ServiceDetailId;
