"use client";
import Field from "@/components/Field";
import GuestLayout from "@/partials/GuestLayout";
import styles from "./Login.module.sass";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  const onSignin = () => router.push("/dashboard");
  return (
    <GuestLayout>
      <form className="px-5 py-20 w-full" action="">
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
            Login
          </button>
          <div className="w-full flex mt-4 justify-center">
            Don&apos;t have an account? {"  "}
            <Link href="/signup" className="font-bold ml-2" onClick={undefined}>
              Register
            </Link>
          </div>
        </div>
      </form>
    </GuestLayout>
  );
}
