"use client";
import { Inputs, customField } from "@/@types";
import {
  FormLabel,
  Input,
  InputGroup
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { getCampaignForm } from "../../lib/api";
import { instagram, tiktok, twitter } from "../assets/images";
import styles from "../styles/page.module.css";
import Loading from "./UI/Loading";
import MyButton from "./UI/button";

const ApplyNow = () => {
  const {
    isPending,
    isError,
    data: formData,
    error,
  } = useQuery({ queryKey: ["data"], queryFn: () => getCampaignForm("") });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className={styles.apply}>
      <p>Apply Now</p>
      {isPending ? (
        <Loading />
      ) : (
        <form style={{ marginTop: "20px" }} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_field}>
            {formData?.default_fields?.map((data: any) => (
              <div className={styles.fields} key={data}>
                <FormLabel className={styles.labels}>{data}</FormLabel>
                <Input
                  placeholder={data}
                  variant="outline"
                  type={
                    data === "email"
                      ? "email"
                      : data === "phone"
                        ? "number"
                        : "text"
                  }
                  {...register(data, { required: true })}
                  size="md"
                  className={styles.inputs}
                />
                {errors[data] && <p>{data} field is required</p>}
              </div>
            ))}
            {/*Social medias*/}
            <FormLabel className={styles.labels}>Your socials</FormLabel>

            {formData?.socials?.map((data: any) => (
              <div className={styles.social} key={data}>
                <Image
                  alt={data}
                  src={
                    data === "instagram"
                      ? instagram
                      : data === "tiktok"
                        ? tiktok
                        : twitter
                  }
                />
                <InputGroup className={styles.fields}>
                  <Input
                    className={styles.inputs}
                    type="tel"
                    placeholder={`@ ${data} Username`}
                    {...register(data, { required: false })}
                  />
                </InputGroup>
              </div>
            ))}

            {/*custom fields*/}
            {formData?.custom_fields?.map(
              (
                { name, is_required, question, type }: customField,
                index: number,
              ) => (
                <div className={styles.fields} key={index}>
                  <FormLabel className={styles.labels}>{question}</FormLabel>
                  <Input
                    placeholder="Your answer"
                    variant="outline"
                    {...register(name, { required: is_required })}
                    size="md"
                    className={styles.inputs}
                  />
                  {errors[name] && <p>This field is required</p>}
                </div>
              ),
            )}
          </div>
          <div className={styles.submitBtn}>
            <MyButton type="submit" color="purple" text="submit" />
          </div>
        </form>
      )}
    </div>
  );
};

export default ApplyNow;
