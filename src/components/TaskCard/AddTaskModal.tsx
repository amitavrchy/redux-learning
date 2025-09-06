import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { useForm } from "react-hook-form"

export function AddTaskModal() {
    const form = useForm()
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <FormField
                            control={form.control}
                        name="title"
                        render={() => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    { /* Your form field */}
                                </FormControl>
                            </FormItem>
                        )}
  />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </Form>
                </DialogContent>
            </form>
        </Dialog>
    )
}
