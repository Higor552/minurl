import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({ className, ...props }) {
    return (
        <div className={cn("flex flex-col gap-6 font-dudu", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Crie sua conta</CardTitle>
                    <CardDescription>
                        Insira seus dados abaixo para criar seu diário de escolhas
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
                                <Input id="name" type="text" placeholder="Max Caulfield" required />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@examplo.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <Field className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="password">Senha</FieldLabel>
                                        <Input id="password" type="password" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="confirm-password">
                                            Confirmar Senha
                                        </FieldLabel>
                                        <Input id="confirm-password" type="password" required />
                                    </Field>
                                </Field>
                                <FieldDescription>
                                    Deve ter pelo menos 8 caracteres.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <Button type="submit" className="w-full">Criar Conta</Button>
                                <FieldDescription className="text-center mt-4">
                                    Já tem uma conta?{" "}
                                    <a href="/login" className="underline font-bold text-primary">
                                        Entrar
                                    </a>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center text-zinc-500">
                Ao continuar, você concorda com nossos <a href="#" className="underline">Termos de Serviço</a>{" "}
                e <a href="#" className="underline">Política de Privacidade</a>.
            </FieldDescription>
        </div>
    )
}