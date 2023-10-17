"use client";
import Field from "@/components/Field";
import GuestLayout from "@/partials/GuestLayout";
import styles from "./Login.module.sass";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const onSignin = () => router.push("/dashboard");
  return (
    <GuestLayout>
      <form className="px-5 py-20 w-full" action="">
        <Field
          className={styles.field}
          label="Name"
          icon="profile"
          type="text"
          name="name"
          value={""}
          error={""}
          helperText={""}
          onChange={undefined}
          onBlur={undefined}
        />
        <Field
          className={styles.field}
          label="Email Address"
          icon="mail"
          type="email"
          name="email"
          value={""}
          error={""}
          helperText={""}
          onChange={undefined}
          onBlur={undefined}
        />

        <Field
          className={styles.field}
          label="Password"
          icon="code"
          type="password"
          name="password"
          value={""}
          error={""}
          helperText={""}
          onChange={undefined}
          onBlur={undefined}
        />

        <div className={styles.btns}>
          <button
            className={classNames("button-stroke button-arrow", styles.button)}
            type="button"
            onClick={() => onSignin()}
          >
            Register
          </button>
          <div className="w-full flex mt-4 justify-center">
            Already have an account? {"  "}
            <Link href="/login" className="font-bold ml-2" onClick={undefined}>
              Sigin
            </Link>
          </div>
        </div>
      </form>
    </GuestLayout>
  );
}
