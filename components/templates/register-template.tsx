import Logo from "../atoms/logo";
import { SignInWithGoogle } from "../atoms/sign-in-with-google";
import { RegisterForm } from "../organisms/register-form";

export default async function RegisterTemplate() {
  return (
    <div className="flex flex-col max-w-lg mx-auto space-y-5">
      <Logo />

      <div className="space-y-3">
        <p className="font-medium">
          <span>{"مرحباً بكم في"}</span>&nbsp;
          <span className="text-primary">{"هن لهن!"}</span>
          <span>{"👋"}</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span>{"معك لتزدهري في رحلة"}</span>&nbsp;
          <span className="text-primary">{"حياتك"}</span>
          <span>
            <br />
            {"الخاصة"}
          </span>
        </h2>
        <p>
          {
            "أدعمك لتزدادي وعياً وتمكناً وثقة وقدرة لخوض الرحلة بكامل صحتك وعافيتك كإمرأة وأم، كما تستحقين بالإضافة إلي تقديم خدمات استشارية مخصصة لكي …"
          }
        </p>
      </div>
      <RegisterForm />

      <SignInWithGoogle />
    </div>
  );
}
